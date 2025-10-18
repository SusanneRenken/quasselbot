const PERSONALIZE_KEY = "vibe_personalize_text";

export function getPersonalization(): string | null {
  try {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(PERSONALIZE_KEY);
  } catch (e) {
    return null;
  }
}

export function setPersonalization(text: string | null) {
  try {
    if (typeof window === "undefined") return;
    if (!text) {
      localStorage.removeItem(PERSONALIZE_KEY);
    } else {
      localStorage.setItem(PERSONALIZE_KEY, text);
    }
  } catch (e) {
    // ignore localStorage errors
  }
}

export default { getPersonalization, setPersonalization };
