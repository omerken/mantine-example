import classNames from 'classnames';
import styles from './calendar-example.module.scss';
import { DatePicker } from '@mantine/dates';
import { Button } from '@mantine/core';

export interface CalendarExampleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CalendarExample = ({ className }: CalendarExampleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Button className={styles.btn}>Click Me</Button>
            <DatePicker
                nextLabel="Next"
                previousDisabled
                nextDisabled
                defaultLevel="month"
                firstDayOfWeek={0}
            />
        </div>
    );
};
