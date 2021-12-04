import { HoursToTimePipe } from './hours-to-time.pipe';

describe('HoursToTimePipe', () => {
  it('create an instance', () => {
    const pipe = new HoursToTimePipe();
    expect(pipe).toBeTruthy();
  });
});
