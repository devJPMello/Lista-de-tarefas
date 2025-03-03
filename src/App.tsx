import { VStack, IconButton, Heading, Flex, Link } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/react';
import TaskList from "./components/Task/List";
import { store } from "./app/store";

const socialLinks = [
    { href: 'https://github.com/devJPMello', icon: <FaGithub />, label: 'Github' },
    { href: 'https://www.linkedin.com/in/joao-pedro-mendes-de-mello/', icon: <FaLinkedin />, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/_pepem2/', icon: <FaInstagram />, label: 'Instagram' }
];

function App() {
    const { colorMode, toggleColorMode } = useColorMode();
    store.subscribe(() => {
        localStorage.setItem('tasks', JSON.stringify(store.getState().tasksWatch.tasks));
        localStorage.setItem('tab', store.getState().tabWatch.tab);
    })

    return (
        <VStack p={4} minH="100vh" pb={28}>
            <IconButton 
                aria-label="Trocar tema"
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                isRound={true}
                size="md"
                alignSelf="flex-end"
                onClick={toggleColorMode}
            />

            <Heading
                p={5}
                fontWeight="extrabold"
                size="xl"
                bgGradient="linear(to-l, teal.300, blue.500)"
                bgClip="text"
            >
                Lista de tarefas
            </Heading>

            <TaskList />
            
            <Flex position="absolute" bottom={5} gap={2}>
                {socialLinks.map(({ href, icon, label }) => (
                    <Link key={href} href={href} target="_blank">
                        <IconButton 
                            aria-label={`Acesse meu perfil no ${label}`}
                            icon={icon}
                            isRound={true}
                            size="md"
                        />
                    </Link>
                ))}
            </Flex>
        </VStack>
    );
}

export default App;