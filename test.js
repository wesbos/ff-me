import { FFmpeg } from "@ffmpeg.wasm/main";
import { cpu, osInfo } from "systeminformation";

const { manufacturer, brand, speed, cores } = await cpu();
const { distro, release, codename} = await osInfo();
console.log(`
  Node ${process.version}
  ${manufacturer} ${brand} ${speed}ghz ${cores} cores
  ${distro} ${release} ${codename}
`);
const ffmpeg = FFmpeg.create({
  log: true,
  logger: (level, message) => console.log(level, message),
});

