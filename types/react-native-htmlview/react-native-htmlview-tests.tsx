import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import HTMLView, { HTMLViewProps } from "react-native-htmlview";

const styles = StyleSheet.create({
    strong: {},
    a: {},
    p: {},
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
});

const style = {
    flex: 1,
};

const defaultTextProps = {
    style: {
        fontSize: 14,
    },
    allowFontScaling: false,
};

const defaultNodeProps = {
    style: {
        fontFamily: "Arial",
    },
};

const defaultRootProps = {
    style: {
        padding: 10,
    },
};

class Simple extends React.Component {
    onPressLink = () => {
        // Do someting
    };

    render() {
        return (
            <HTMLView
                value="<br><b>This is html</b><div><p>Yo P</p></p>"
                addLineBreaks={false}
                style={style}
                stylesheet={styles}
                onLinkPress={this.onPressLink}
                NodeComponent={Text}
                nodeComponentProps={defaultNodeProps}
                RootComponent={View}
                rootComponentProps={defaultRootProps}
                TextComponent={Text}
                textComponentProps={defaultTextProps}
                renderNode={renderNode}
            />
        );
    }
}

const renderNode: HTMLViewProps["renderNode"] = (
    node,
    _index,
    _siblings,
    parent,
    defaultRenderer,
) => {
    if (node.name === "p") {
        const { numberOfLines } = node.attribs;

        return (
            <Text
                style={[
                    { color: "#acacac" },
                    node.attribs.style,
                ]}
                numberOfLines={numberOfLines ? Number(numberOfLines) : undefined}
            >
                {defaultRenderer(node.children, node)}
            </Text>
        );
    } else {
        return defaultRenderer([node], parent);
    }
};
