function getColumnWidthRanges(columnWidths) {
  let columnWidthAccumulator = -1;

  return columnWidths.map(columnWidth => {
    const prevColumnWidthAccumulator = columnWidthAccumulator;

    columnWidthAccumulator += columnWidth;

    return [prevColumnWidthAccumulator, columnWidthAccumulator];
  });
}

function findColumnWidthRange(width, columnRanges, hScrollOffset, direction) {
  const rangeIndex = columnRanges.findIndex((range, columnIndex) => {
    const offsetAmountUntilCurrentColumn = (columnIndex + 1) * hScrollOffset;
    const offsetAmountWithDirectionAdjustment =
      direction === 'left'
        ? offsetAmountUntilCurrentColumn + 1
        : offsetAmountUntilCurrentColumn;
    const isWidthInRange =
      direction === 'left'
        ? range[0] < width &&
          range[1] >= width - offsetAmountWithDirectionAdjustment
        : range[0] <= width &&
          range[1] > width + offsetAmountWithDirectionAdjustment;

    return isWidthInRange;
  });

  return {
    column: rangeIndex,
    range: columnRanges[rangeIndex],
  };
}

function extractColumnWidthFromStringValue(stringColumnWidth) {
  return parseInt(stringColumnWidth, 10);
}

module.exports = {
  getColumnWidthRanges,
  findColumnWidthRange,
  extractColumnWidthFromStringValue,
};
