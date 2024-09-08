import React from 'react'
import HeaderGreetings from '../../components/HeaderGreetings'
import BalanceBox from '@/components/BalanceBox';
import RightSideBar from '@/components/RightSideBar';
import { getLoggedInUser } from '@/lib/actions/user.action';
import { getAccount, getAccounts } from '@/lib/actions/bank.action';
import RecentTransactions from '@/components/RecentTransactions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  return (
    <section className="home">
      <div className="home-content">
        {/* This portion implements the greetings block, the title, users and all are the arguments passed to HeaderGreetings component */}
        <HeaderGreetings
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and Manage your Accounts and Transactions efficiently."
        />
        {/* This portion implements the account balance block, accounts and totBanks are all arguments passed to BalanceBox component */}
        <BalanceBox
          accounts={accountsData}
          totBanks={accounts?.totalBanks}
          totCurrentBalance={accounts?.totCurrentBalance}
        />
        
        <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage} />

      </div>

      <RightSideBar
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default Home