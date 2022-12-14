import { Htag } from '../components';
import { Button } from '../components';

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Текст</Htag>
            <Button appearance="primary">Текст кнопки</Button>
            <Button appearance="ghost"> Текст кнопки</Button>
        </>
    );
}
