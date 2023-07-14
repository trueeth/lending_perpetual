import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { Address, Hash, parseUnits } from 'viem'
import { publicClient } from '../../utils/viem'
import { calculateGasMargin } from '../../utils'
import { RootState } from '../store'
import { OrderType } from 'interfaces'
import { useProtocolContract } from 'hooks/useContract'

export type IProtocolContract = ReturnType<typeof useProtocolContract>

interface ICreateOrder {
  account: Address
  protocolContract: IProtocolContract
  loanToken: Address
  loanAmount: string
  collateralToken: Address
  collateralAmount: string
  lenderFee: number
  timestamps: number[]
}

export const createSupplyOrder = createAsyncThunk(
  'action/createSupplyOrder',
  async ({
    account,
    protocolContract,
    loanToken,
    loanAmount,
    collateralToken,
    collateralAmount,
    lenderFee,
    timestamps,
  }: ICreateOrder) => {
    const gasPrice = await publicClient.getGasPrice()

    let args: any = [
      loanToken,
      parseUnits(loanAmount, 18),
      collateralToken,
      parseUnits(collateralAmount, 18),
      parseUnits(String(lenderFee), 18),
      timestamps,
      OrderType.SUPPLY,
    ]

    const safeGasEstimate = calculateGasMargin(
      await protocolContract.estimateGas['newOrder'](args, { account })
    )

    try {
      await protocolContract.write
        .newOrder(args, {
          gasPrice,
          gasLimit: safeGasEstimate,
        })
        .then((response: Hash) => {
          console.log(response)
        })
    } catch (err) {
      console.log(err)
    }
  }
)

export const createBorrowOrder = createAsyncThunk(
  'action/createBorrowOrder',
  async ({
    account,
    protocolContract,
    loanToken,
    loanAmount,
    collateralToken,
    collateralAmount,
    lenderFee,
    timestamps,
  }: ICreateOrder) => {
    const gasPrice = await publicClient.getGasPrice()

    let args: any = [
      loanToken,
      parseUnits(loanAmount, 18),
      collateralToken,
      parseUnits(collateralAmount, 18),
      parseUnits(String(lenderFee), 18),
      timestamps,
      OrderType.BORROW,
    ]

    const safeGasEstimate = calculateGasMargin(
      await protocolContract.estimateGas['newOrder'](args, { account })
    )

    try {
      await protocolContract.write
        .newOrder(args, {
          gasPrice,
          gasLimit: safeGasEstimate,
        })
        .then((response: Hash) => {
          console.log(response)
        })
    } catch (err) {
      console.log(err)
    }
  }
)

export const getOrder = createAsyncThunk(
  'action/getOrders',
  async ({
    account,
    protocolContract,
    orderId,
  }: {
    account: Address
    protocolContract: IProtocolContract
    orderId: bigint
  }) => {
    const gasPrice = await publicClient.getGasPrice()

    const safeGasEstimate = calculateGasMargin(
      await protocolContract.estimateGas['getOrder']([orderId], { account })
    )
    try {
      await protocolContract.write
        .getOrder([orderId], {
          gasPrice,
          gasLimit: safeGasEstimate,
        })
        .then((response: Hash) => {
          console.log(response)
        })
    } catch (err) {
      console.log(err)
    }
  }
)

export const liquidateOrder = createAsyncThunk(
  'action/liquidate',
  async ({
    account,
    protocolContract,
    orderId,
  }: {
    account: Address
    protocolContract: IProtocolContract
    orderId: bigint
  }) => {
    const gasPrice = await publicClient.getGasPrice()

    const safeGasEstimate = calculateGasMargin(
      await protocolContract.estimateGas['liquidateOrder']([orderId], {
        account,
      })
    )
    try {
      await protocolContract.write
        .getOrder([orderId], {
          gasPrice,
          gasLimit: safeGasEstimate,
        })
        .then((response: Hash) => {
          console.log(response)
        })
    } catch (err) {
      console.log(err)
    }
  }
)
export const cancelOrder = createAsyncThunk(
  'action/cancel',
  async ({
    account,
    protocolContract,
    orderId,
  }: {
    account: Address
    protocolContract: IProtocolContract
    orderId: bigint
  }) => {
    const gasPrice = await publicClient.getGasPrice()

    const safeGasEstimate = calculateGasMargin(
      await protocolContract.estimateGas['cancelOrder']([orderId], { account })
    )
    try {
      await protocolContract.write
        .getOrder([orderId], {
          gasPrice,
          gasLimit: safeGasEstimate,
        })
        .then((response: Hash) => {
          console.log(response)
        })
    } catch (err) {
      console.log(err)
    }
  }
)
export const repayOrder = createAsyncThunk(
  'action/repay',
  async ({
    account,
    protocolContract,
    orderId,
  }: {
    account: Address
    protocolContract: IProtocolContract
    orderId: bigint
  }) => {
    const gasPrice = await publicClient.getGasPrice()

    const safeGasEstimate = calculateGasMargin(
      await protocolContract.estimateGas['repayOrder']([orderId], { account })
    )
    try {
      await protocolContract.write
        .getOrder([orderId], {
          gasPrice,
          gasLimit: safeGasEstimate,
        })
        .then((response: Hash) => {
          console.log(response)
        })
    } catch (err) {
      console.log(err)
    }
  }
)

const now = Date.now()

const initialState = {
  supply: {
    loanToken: '0x8Fa3A5CD4DE7cD6a21d5D2cb454A9627259DDb06',
    loanAmount: '0',
    collateralToken: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    collateralAmount: '0',
    lenderFee: 0,
    startTimestamp: now + 60 * 60 * 1000 * 3,
    endTimestamp: now + 60 * 60 * 24 * 1000 * 7,
  },
  borrow: {
    loanToken: '0x8Fa3A5CD4DE7cD6a21d5D2cb454A9627259DDb06',
    loanAmount: '0',
    collateralToken: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    collateralAmount: '0',
    lenderFee: 0,
    startTimestamp: now,
    endTimestamp: now + 60 * 60 * 24 * 1000 * 7,
  },
}

export interface IActionSlice {
  supply: {
    loanToken: Address
    loanAmount: string
    collateralToken: Address
    collateralAmount: string
    lenderFee: number
    startTimestamp: number
    endTimestamp: number
  }
  borrow: {
    loanToken: Address
    loanAmount: string
    collateralToken: Address
    collateralAmount: string
    startTimestamp: number
    endTimestamp: number
  }
}

const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    setSupLoanToken(state, action: { payload: { loanToken: Address } }) {
      state.supply.loanToken = action.payload.loanToken
    },
    setSupLoanAmount(state, action: { payload: { loanAmount: string } }) {
      state.supply.loanAmount = action.payload.loanAmount
    },
    setSupCollateralToken(
      state,
      action: { payload: { collateralToken: Address } }
    ) {
      state.supply.collateralToken = action.payload.collateralToken
    },
    setSupCollateralAmount(
      state,
      action: { payload: { collateralAmount: string } }
    ) {
      state.supply.collateralAmount = action.payload.collateralAmount
    },
    setSupLenderFee(state, action: { payload: { lenderFee: number } }) {
      state.supply.lenderFee = action.payload.lenderFee
    },
    setSupStartTimestamp(state, action: { payload: { timestamp: number } }) {
      state.supply.startTimestamp = action.payload.timestamp
    },
    setSupEndTimestamp(state, action: { payload: { timestamp: number } }) {
      state.supply.endTimestamp = action.payload.timestamp
    },
    setBorrowLoanToken(state, action: { payload: { loanToken: Address } }) {
      state.borrow.loanToken = action.payload.loanToken
    },
    setBorrowLoanAmount(state, action: { payload: { loanAmount: string } }) {
      state.borrow.loanAmount = action.payload.loanAmount
    },
    setBorrowCollateralToken(
      state,
      action: { payload: { collateralToken: Address } }
    ) {
      state.borrow.collateralToken = action.payload.collateralToken
    },
    setBorrowCollateralAmount(
      state,
      action: { payload: { collateralAmount: string } }
    ) {
      state.borrow.collateralAmount = action.payload.collateralAmount
    },
    setBorrowStartTimestamp(state, action: { payload: { timestamp: number } }) {
      state.borrow.startTimestamp = action.payload.timestamp
    },
    setBorrowEndTimestamp(state, action: { payload: { timestamp: number } }) {
      state.borrow.endTimestamp = action.payload.timestamp
    },
  },
})

const baseInfo = (state: RootState) => state.action
export default actionSlice.reducer

export const {
  setSupLoanToken,
  setSupLoanAmount,
  setSupCollateralToken,
  setSupCollateralAmount,
  setSupLenderFee,
  setSupStartTimestamp,
  setSupEndTimestamp,
  setBorrowLoanToken,
  setBorrowLoanAmount,
  setBorrowCollateralToken,
  setBorrowCollateralAmount,
  setBorrowStartTimestamp,
  setBorrowEndTimestamp,
} = actionSlice.actions

export const getActionState = createSelector(baseInfo, (action) => action)
