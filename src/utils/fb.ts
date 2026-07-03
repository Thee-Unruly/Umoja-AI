// Firebase App Check removed — Umoja AI has no backend/leaderboard.
// These are safe no-ops so benchmark.ts / feedback.ts fail gracefully
// instead of crashing, without needing to touch those files.

export const initializeAppCheck = async () => {
  return;
};

export const getAppCheckToken = async (): Promise<string | null> => {
  return null;
};