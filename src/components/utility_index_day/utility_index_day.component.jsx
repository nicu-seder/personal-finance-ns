import React from "react";

//Import styles
import {UtilityIndexDayContainer, UtilityIndexDayValue} from "./utility._index_day.styles";

const UtilityIndexDay = ({index_days, day_number, payment_deadline}) => {
    const is_index_day = index_days.includes(day_number);
    const is_deadline_day = payment_deadline === day_number;
    return (
        <UtilityIndexDayContainer isIndexDay={is_index_day} isDeadlineDay={is_deadline_day}>
            <UtilityIndexDayValue>
                {day_number}
            </UtilityIndexDayValue>
        </UtilityIndexDayContainer>
    )
};

export default UtilityIndexDay;