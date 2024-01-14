import {Brand} from './brand';
import {Country} from "./country";

describe('Brand', () => {
  it('should create an instance', () => {
    expect(new Brand( "test", "test", "test", new Date(2024,1, 1), Country.FR, "/test"))
      .toBeTruthy();
  });
});
