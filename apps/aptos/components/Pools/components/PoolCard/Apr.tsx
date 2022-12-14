import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { Pool } from '@pancakeswap/uikit'
import { Coin } from '@pancakeswap/aptos-swap-sdk'

const withShownApr = (AprComp) => (props) => {
  const { account } = useActiveWeb3React()

  const { shouldShowBlockCountdown, hasPoolStarted } = {
    shouldShowBlockCountdown: false,
    hasPoolStarted: false,
  }

  return (
    <Pool.AprRowWithToolTip isVaultKey={false}>
      <AprComp
        {...props}
        shouldShowApr={hasPoolStarted || !shouldShowBlockCountdown}
        account={account}
        autoCompoundFrequency={0}
      />
    </Pool.AprRowWithToolTip>
  )
}

export default withShownApr(Pool.Apr<Coin>)
