import { Curriculo } from './curriculo.model';

describe('Curriculo', () => {
  it('should create an instance', () => {
    expect(
      new Curriculo(
        undefined as any,
        undefined as any,
        undefined as any,
        undefined as any,
        undefined as any,
        undefined as any,
        undefined as any,
      ),
    ).toBeTruthy();
  });
});
