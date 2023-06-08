import { createBoard } from '@wixc3/react-board';
import { CalendarExample } from '../../../components/calendar-example/calendar-example';

export default createBoard({
    name: 'CalendarExample',
    Board: () => <CalendarExample />,
    environmentProps: {
        canvasBackgroundColor: '#ffffff',
    },
});
