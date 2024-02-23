module.exports = {
	printWidth: 100,
	trailingComma: "es5",
	useTabs: true,
	semi: false,
	singleQuote: false,
	endOfLine: "auto",
	bracketSameLine: true,
	tabWidth: 4,
	plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrder: ["^[./]"],
}
