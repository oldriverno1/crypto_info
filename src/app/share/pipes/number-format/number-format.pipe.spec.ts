import { numberFormatPipe } from './number-format.pipe';

describe('PriceFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new numberFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
