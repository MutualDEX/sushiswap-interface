import React from 'react'
import styled from 'styled-components'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'

const StyledLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;

    :hover {
        text-decoration: underline;
    }

    :focus {
        outline: none;
        text-decoration: underline;
    }

    :active {
        text-decoration: none;
    }
`

export default function InfoCard() {
    const { i18n } = useLingui()
    return (
        <div className="flex flex-col max-w-xl w-full mb-2 mt-auto">
            <div className="flex max-w-lg">
                <div className="text-body font-bold md:text-h5 text-high-emphesis self-end mb-3 md:mb-7">
                    {i18n._(t`Maximize yield by staking BGSP for xBGSP`)}
                </div>
                {/* <div className="pl-6 pr-3 mb-1 min-w-max self-start md:hidden">
                    <img src={XSushiSignSmall} alt="xsushi sign" />
                </div> */}
            </div>
            <div className="text-white-500 text-sm leading-5 md:text-caption max-w-lg mb-2 md:mb-4 pr-3 md:pr-0">
                {t`For every swap on the exchange on every chain, 0.05% of the swap fees are distributed as BGSP
                proportional to your share of the BigBank. When your BGSP is staked into the BigBank, you receive
                xBGSP in return for voting rights and a fully composable token that can interact with other protocols.
                Your xBGSP is continuously compounding, when you unstake you will receive all the originally deposited
                BGSP and any additional from fees.`}
            </div>
            {/* <div className="flex">
                <div className="mr-14 md:mr-9">
                    <StyledLink className="text-body whitespace-nowrap text-caption2 md:text-lg md:leading-5">
                        Enter the Bank
                    </StyledLink>
                </div>
                <div>
                    <StyledLink className="text-body whitespace-nowrap text-caption2 md:text-lg md:leading-5">
                        Tips for using xBGSP
                    </StyledLink>
                </div>
            </div> */}
        </div>
    )
}
