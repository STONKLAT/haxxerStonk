import logUpdate from 'log-update';

let frames: string[] = [ '◐', '◓', '◑', '◒' ];

let i: number = 0
setInterval(() => {
  const frame = frames[i++ % frames.length];
  logUpdate(frame);
}, 100);
