export as namespace Noise
export = Noise

declare namespace Noise {
	class SimplexNoise {
		noise(x: number, y: number): number
		noise3d(x: number, y: number, z: number): number
	}
}