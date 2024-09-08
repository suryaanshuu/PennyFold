import React from 'react'
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const BalanceBox = ({ accounts = [], totBanks, totCurrentBalance }: {accounts: any[], totBanks: number, totCurrentBalance: number}) => {
  return (
    <section className="total-balance">
      {/* Doughnut Chart on the main page */}
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      {/* No of Bank Accounts for a user */}
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totBanks}</h2>

        {/* Total current balance for a user */}
        <div className="flex flex-col gap-2">
          <p className="total-balance-label"> Total Current Balance</p>
          
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BalanceBox