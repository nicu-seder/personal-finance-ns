import React from "react";

import PersonalFinanceDescription from "../../components/personal_finance_welcome/personal_finance.component";
import BillReminderDescription from "../../components/bill_reminder_welcome/bill_reminder.component";
import AnalyticsDescription from "../../components/analytics_welcome/analytics.component";

//import styles
import {WelcomePageContainer} from "./welcome_page_styles";

const WelcomePage = ()=>{
    return (
        <WelcomePageContainer>
            <PersonalFinanceDescription/>
            <BillReminderDescription/>
            <AnalyticsDescription/>
        </WelcomePageContainer>
    );
};

export default WelcomePage;