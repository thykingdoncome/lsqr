export const formatAmount = (num, to) => {
    return num.toFixed(to).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };