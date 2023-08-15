import { Flex, Text, Button } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Theme,ThemePanel } from '@radix-ui/themes';

export const runtime = 'experimental-edge'

export default function MyApp() {
    return (
        <div className="p-8">
            <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
                <Flex direction="column" gap="2">
                    <Text>Hello from Radix Themes :)</Text>
                    <Button>Lets go</Button>
                </Flex>
                {/* <ThemePanel /> */}
            </Theme>
        </div>
    );
}