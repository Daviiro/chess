const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const yAxis = ["8", "7", "6", "5", "4", "3", "2", "1"];

export default function Board() {
	let boardTiles = [];
	for (let j = 0; j < yAxis.length; j++) {
		for (let i = 0; i < xAxis.length; i++) {
			const tilesValue = i + j;

			if (tilesValue % 2 !== 0) {
				boardTiles.push(
					<div className="bg-rose-950 border-2 border-white/20">
						{xAxis[i]}-{yAxis[j]}
					</div>
				);
			} else {
				boardTiles.push(
					<div className="bg-green-500/60 border-2 border-white/20">
						{xAxis[i]}-{yAxis[j]}
					</div>
				);
			}
		}
	}

	return (
		<div className="w-[52rem] h-[52rem] grid grid-cols-8">{boardTiles}</div>
	);
}
