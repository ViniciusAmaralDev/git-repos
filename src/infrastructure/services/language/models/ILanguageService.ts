export interface ILanguageService {
  get: () => string;
  set: (value: string) => void;
}
