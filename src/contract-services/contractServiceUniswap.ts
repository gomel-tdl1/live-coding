import { BigNumber, ethers } from 'ethers';

import { ERC20__factory, UniswapV2Router__factory } from '../contractTypes';

const WETH_ADDRESS = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6';
const VAI_ADDRESS = '0x1cA98095125e68e30613bE169E0E7067A8a825fb';

const UNISWAP_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

const getAmountOut = async (
  amountIn: BigNumber,
  provider: ethers.providers.Web3Provider,
) => {
  const routerInstance = await UniswapV2Router__factory.connect(
    UNISWAP_ROUTER_ADDRESS,
    provider,
  );
  const amountsOut = await routerInstance.getAmountsOut(amountIn, [
    WETH_ADDRESS,
    VAI_ADDRESS,
  ]);

  return amountsOut[1];
};

export const swapETHToVAI = async (
  amountIn: BigNumber,
  provider: ethers.providers.Web3Provider,
) => {
  const signer = await provider.getSigner(0);
  const routerInstance = await UniswapV2Router__factory.connect(
    UNISWAP_ROUTER_ADDRESS,
    signer,
  );
  const vaiInstance = await ERC20__factory.connect(VAI_ADDRESS, signer);
  await vaiInstance
    .approve(UNISWAP_ROUTER_ADDRESS, amountIn)
    .then((tx) => tx.wait());

  const amountOut = await getAmountOut(amountIn, provider);
  const signerAddress = await signer.getAddress();

  const deadline = Math.ceil(Date.now() / 1000) + 86400;

  await routerInstance.swapETHForExactTokens(
    amountOut,
    [WETH_ADDRESS, VAI_ADDRESS],
    signerAddress,
    deadline,
    { value: amountIn },
  );
};
