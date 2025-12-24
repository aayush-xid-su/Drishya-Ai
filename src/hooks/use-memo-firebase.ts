import { useMemo, type DependencyList } from 'react';
import {
  DocumentReference,
  Query,
  Unsubscribe,
  onSnapshot,
} from 'firebase/firestore';

/**
 * Custom hook to memoize a Firestore query or document reference.
 * This prevents re-creating the reference on every render, which can cause
 * infinite loops in `useEffect` when the reference is a dependency.
 *
 * @param factory A function that creates the Firestore query or document reference.
 * @param deps An array of dependencies for the `useMemo` hook.
 * @returns The memoized query or document reference.
 */
export function useMemoFirebase<T extends Query | DocumentReference | null>(
  factory: () => T,
  deps: DependencyList
): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(factory, deps);
}

/**
 * A no-op function for use as a default callback.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

/**
 * Attaches a Firestore snapshot listener and returns a memoized unsubscribe function.
 *
 * @param ref The Firestore query or document reference to listen to.
 * @param onNext A callback function to be called with the snapshot data.
 * @param onError A callback function to be called with any errors.
 * @returns A memoized unsubscribe function.
 */
export function useFirebaseSnapshot(
  ref: Query | DocumentReference | null,
  onNext: (
    snapshot:
      | Parameters<Parameters<typeof onSnapshot>[1]>[0]
      | Parameters<Parameters<typeof onSnapshot>[2]>[0]
  ) => void,
  onError: (error: Error) => void
): Unsubscribe {
  // The unsubscribe function is memoized to prevent re-subscribing on every render.
  const unsubscribe = useMemo(() => {
    if (!ref) {
      return noop;
    }
    return onSnapshot(ref, onNext, onError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return unsubscribe;
}
