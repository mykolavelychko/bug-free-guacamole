export class EmptyValueFormatValueConverter {
  toView(value, format) {
    if (!value) {
      return format || "-";
    }
    return value;
  }
}
