import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <div>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className="img"
            />
        </div>
    ),
    environmentProps: {
        canvasWidth: 146,
        canvasHeight: 98,
    },
});
