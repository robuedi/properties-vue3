export function useNumberFormatter() {
  const formatNumber = (numString: string | number): string => {
    // Remove leading zeros
    const trimmed = `${numString}`.replace(/^0+/, '') || '0'

    // Add spaces every 3 digits from right to left
    return trimmed.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  return { formatNumber }
}
