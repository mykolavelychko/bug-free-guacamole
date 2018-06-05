import {EmptyValueFormatValueConverter} from "resources/value-converters/empty-value-format";

describe("EmptyValueFormatValueConverter", () => {

  const emptyValueFormatValueConverter = new EmptyValueFormatValueConverter();

  it("should return format when value is empty string and format provided", () => {
    expect(emptyValueFormatValueConverter.toView("", "A")).toEqual("A");
  });

  it("should return - when value is empty string and format not provided", () => {
    expect(emptyValueFormatValueConverter.toView("", "")).toEqual("-");
  });

  it("should return format when value is 0 and format provided", () => {
    expect(emptyValueFormatValueConverter.toView(0, "B")).toEqual("B");
  });

  it("should return - when value is 0 and format provided", () => {
    expect(emptyValueFormatValueConverter.toView(0, "")).toEqual("-");
  });

  it("should return value when value is string and format provided", () => {
    expect(emptyValueFormatValueConverter.toView("test", "C")).toEqual("test");
  });

  it("should return value when value is string and format not provided", () => {
    expect(emptyValueFormatValueConverter.toView("test", "")).toEqual("test");
  });

  it("should return value when value is number and format provided", () => {
    expect(emptyValueFormatValueConverter.toView(123, "C")).toEqual(123);
  });

  it("should return value when value is number and format not provided", () => {
    expect(emptyValueFormatValueConverter.toView(123, "")).toEqual(123);
  });
});
