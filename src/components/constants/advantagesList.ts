import Group from 'public/group.svg';
import Book from 'public/book.svg';
import MathFormula from 'public/mathFormula.svg';
import ChatDots from 'public/chatDots.svg';
import Skillshare from 'public/Skillshare.svg';

type TypeAdvantage = {
	id: number;
	title: string;
	Icon: React.ElementType;
	alt: string;
};

const ADVANTAGES_LIST: TypeAdvantage[] = [
	{
		id: 0,
		title: 'Group Reading',
		Icon: Group,
		alt: 'Group Icon',
	},
	{
		id: 1,
		title: '10k Courses',
		Icon: Book,
		alt: 'Book Icon',
	},
	{
		id: 2,
		title: 'Problem Solving',
		Icon: MathFormula,
		alt: 'Math Formula Icon',
	},
	{
		id: 3,
		title: 'Live chat ',
		Icon: ChatDots,
		alt: 'Chat Dots Icon',
	},
	{
		id: 4,
		title: 'Hand-on activities',
		Icon: Skillshare,
		alt: 'Skillshare Icon',
	},
];

export default ADVANTAGES_LIST;
