import { isNative } from 'utils/token'
import { Address } from 'viem'
import { useAccount, useBalance } from 'wagmi'

export const useTokenBalance = (token: Address) => {
  const { address: account } = useAccount()
  const nativeBalance = useBalance({
    address: account,
  })
  const tokenBalance = useBalance({
    address: account,
    token,
  })

  return isNative(token) ? nativeBalance : tokenBalance
}
