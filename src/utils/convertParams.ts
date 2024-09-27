import queryString from 'query-string'

export const SplitQueryParams = (query: string): string => {
  // Parse the query string
  const parsedParams = queryString.parse(query)

  // Create an array to hold the individual query string components
  const queryParamsArray: string[] = []

  // Iterate over the parsed parameters
  for (const key in parsedParams) {
    if (Object.prototype.hasOwnProperty.call(parsedParams, key)) {
      const value = parsedParams[key]

      if (Array.isArray(value)) {
        // If the value is an array, add each item separately
        value.forEach((val) => {
          queryParamsArray.push(`${key}=${val}`)
        })
      } else if (typeof value === 'string' && value.includes(',')) {
        // If the value contains a comma, split it and add each item separately
        value.split(',').forEach((val) => {
          queryParamsArray.push(`${key}=${val}`)
        })
      } else {
        // Otherwise, add the parameter as is
        queryParamsArray.push(`${key}=${value}`)
      }
    }
  }

  // Join the array to form the final query string
  return queryParamsArray.join('&')
}
