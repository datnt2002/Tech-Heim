export const generateTransactionID = (): string => {
  return 'txn_' + Math.random().toString(36).substring(2, 9)
}
