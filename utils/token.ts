import { TokenList } from 'constants/token'
import { Address } from 'viem'

export const getTokenNameFromAddress = (addr: Address) => {
  const tokenMeta = TokenList.find((e) => e.address === addr)
  return tokenMeta?.name
}

export const getTokenLogoFromAddress = (addr: Address) => {
  const tokenMeta = TokenList.find((e) => e.address === addr)
  return tokenMeta?.logo
}

export const isNative = (addr: Address) => {
  return addr === '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'
}

export const getTokenAddressFromName = (tokenName: string) => {
  const tokenMeta = TokenList.find((e) => e.name === tokenName)
  return tokenMeta?.address
}

export const getDecimals = (token: Address) => {
  const tokenMeta = TokenList.find((e) => e.address === token)
  return tokenMeta?.decimal ?? 18
}
