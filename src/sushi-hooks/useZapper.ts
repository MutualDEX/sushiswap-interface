import { Token, TokenAmount } from '@sushiswap/sdk'
import { useCallback, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useZapperContract } from './useContract'
import { useTransactionAdder } from '../state/transactions/hooks'

import { useActiveWeb3React } from '../hooks'
import { BalanceProps } from './queries/useTokenBalance'
import Fraction from '../constants/Fraction'
const { BigNumber } = ethers

const useZapper = () => {
  const { account } = useActiveWeb3React()
  const zapperContract = useZapperContract(true)
  console.log({zapperContract})

  const addTransaction = useTransactionAdder()
  const [allowance, setAllowance] = useState('0')

  const zapIn = useCallback(
    async (pairAddress, amount, minPoolTokens, swapTarget) => {
      try {
        const tx = await zapperContract?.ZapIn(
          '0x0000000000000000000000000000000000000000',
          pairAddress,
          amount,
          minPoolTokens,
          swapTarget,
          // Unknown byte data param (swapData)
          0x0,
          // Affiliate
          '0x0000000000000000000000000000000000000000',
          // Transfer residual
          true,
          {
            value: amount
          }
        )
        return addTransaction(tx, { summary: 'Zap' })
        console.log(tx, 'HERE IS THE SWEET SWEET ZAP TX')
      } catch (e) {
        console.log(e)
      }
    }, 
    []
  )

  return { zapIn }
}

export default useZapper