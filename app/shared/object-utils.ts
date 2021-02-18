export function assignData<T>(Data: T) {
  for (const [key, value] of Object.entries(Data)) {
    this[key] = value
  }
}