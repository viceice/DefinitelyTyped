import * as React from "react";
import {
    areEqual,
    FixedSizeGrid,
    FixedSizeList,
    ListChildComponentProps,
    shouldComponentUpdate,
    VariableSizeGrid,
    VariableSizeList,
} from "react-window";

const FixedSizeListTestRequiredProps: React.FC = () => (
    <FixedSizeList itemSize={0} height={0} itemCount={0} width={0}>
        {({ style, index }) => <div style={style}>Test {index}</div>}
    </FixedSizeList>
);

const VariableSizeListTestRequiredProps: React.FC = () => (
    <VariableSizeList itemSize={index => 0} height={0} itemCount={0} width={0}>
        {({ style, index }) => <div style={style}>Test {index}</div>}
    </VariableSizeList>
);

const FixedSizeGridTestRequiredProps: React.FC = () => (
    <FixedSizeGrid
        columnCount={0}
        columnWidth={0}
        rowCount={0}
        rowHeight={0}
        height={0}
        width={0}
    >
        {({ style, columnIndex, rowIndex }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex}
            </div>
        )}
    </FixedSizeGrid>
);

const VariableSizeGridTestRequiredProps: React.FC = () => (
    <VariableSizeGrid
        columnCount={0}
        columnWidth={index => 0}
        rowCount={0}
        rowHeight={index => 0}
        height={0}
        width={0}
    >
        {({ style, columnIndex, rowIndex }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex}
            </div>
        )}
    </VariableSizeGrid>
);

const anyRef: React.Ref<any> = React.createRef();

const FixedSizeListTestOptionalProps: React.FC<{ testBool: boolean }> = ({
    testBool,
}) => (
    <FixedSizeList
        itemSize={0}
        height={0}
        itemCount={0}
        width={0}
        className=""
        direction={testBool ? "rtl" : "ltr"}
        initialScrollOffset={0}
        innerRef={anyRef}
        innerElementType="div"
        itemData={{ foo: "bar" }}
        itemKey={index => "foo" + index.toString()}
        layout={testBool ? "vertical" : "horizontal"}
        onItemsRendered={({
            overscanStartIndex,
            overscanStopIndex,
            visibleStartIndex,
            visibleStopIndex,
        }) =>
            overscanStartIndex
            + overscanStopIndex
            + visibleStartIndex
            + visibleStopIndex}
        useIsScrolling={true}
        outerElementType="div"
        style={{ color: "cyan" }}
        overscanCount={0}
        outerRef={anyRef}
        ref={React.createRef<FixedSizeList>()}
        onScroll={({
            scrollDirection,
            scrollOffset,
            scrollUpdateWasRequested,
        }) =>
            scrollDirection === "forward"
                ? scrollUpdateWasRequested
                : scrollOffset}
    >
        {({ style, index }) => <div style={style}>Test {index}</div>}
    </FixedSizeList>
);

const VariableSizeListTestOptionalProps: React.FC<{ testBool: boolean }> = ({
    testBool,
}) => (
    <VariableSizeList
        itemSize={() => 0}
        height={0}
        itemCount={0}
        width={0}
        className=""
        direction={testBool ? "rtl" : "ltr"}
        initialScrollOffset={0}
        innerRef={anyRef}
        innerElementType="div"
        itemData={{ foo: "bar" }}
        itemKey={index => "foo" + index.toString()}
        layout={testBool ? "vertical" : "horizontal"}
        onItemsRendered={({
            overscanStartIndex,
            overscanStopIndex,
            visibleStartIndex,
            visibleStopIndex,
        }) =>
            overscanStartIndex
            + overscanStopIndex
            + visibleStartIndex
            + visibleStopIndex}
        useIsScrolling={true}
        outerElementType="div"
        style={{ color: "cyan" }}
        overscanCount={0}
        outerRef={anyRef}
        ref={React.createRef<VariableSizeList>()}
        onScroll={({
            scrollDirection,
            scrollOffset,
            scrollUpdateWasRequested,
        }) =>
            scrollDirection === "forward"
                ? scrollUpdateWasRequested
                : scrollOffset}
        estimatedItemSize={0}
    >
        {({ style, index }) => <div style={style}>Test {index}</div>}
    </VariableSizeList>
);

const VariableSizeGridTestOptionalProps: React.FC<{ testBool: boolean }> = ({
    testBool,
}) => (
    <VariableSizeGrid
        columnCount={0}
        columnWidth={index => 0}
        rowCount={0}
        rowHeight={index => 0}
        height={0}
        width={0}
        className=""
        direction={testBool ? "ltr" : "rtl"}
        estimatedColumnWidth={0}
        estimatedRowHeight={0}
        initialScrollLeft={0}
        initialScrollTop={0}
        innerRef={anyRef}
        innerElementType="div"
        itemData={{ foo: "bar" }}
        itemKey={({ columnIndex, rowIndex }) => columnIndex.toString() + rowIndex.toString()}
        onItemsRendered={({
            overscanColumnStartIndex,
            overscanColumnStopIndex,
            overscanRowStartIndex,
            overscanRowStopIndex,
            visibleColumnStartIndex,
            visibleColumnStopIndex,
            visibleRowStartIndex,
            visibleRowStopIndex,
        }) => undefined}
        onScroll={({
            horizontalScrollDirection,
            scrollLeft,
            scrollTop,
            scrollUpdateWasRequested,
            verticalScrollDirection,
        }) => undefined}
        outerRef={anyRef}
        outerElementType="div"
        overscanColumnCount={5}
        overscanRowCount={5}
        ref={React.createRef<VariableSizeGrid>()}
        style={{ color: "red" }}
        useIsScrolling={true}
    >
        {({ style, columnIndex, rowIndex }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex}
            </div>
        )}
    </VariableSizeGrid>
);

const RowWithAreEqual = React.memo((props: ListChildComponentProps) => {
    const { index, style } = props;
    return <div style={style}>Row {index}</div>;
}, areEqual);

class RowWithShouldComponentUpdate extends React.Component<
    ListChildComponentProps
> {
    shouldComponentUpdate(...args: any[]) {
        return shouldComponentUpdate.call(this, ...args);
    }
    render() {
        const { index, style } = this.props;
        return <div style={style}>Row {index}</div>;
    }
}

const fixedRef = React.createRef<FixedSizeGrid>();
const FixedSizeGridTestRefs: React.FC = () => (
    <FixedSizeGrid
        columnCount={0}
        columnWidth={0}
        ref={fixedRef}
        rowCount={0}
        rowHeight={0}
        height={0}
        width={0}
    >
        {({ style, columnIndex, rowIndex }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex}
            </div>
        )}
    </FixedSizeGrid>
);

if (fixedRef.current) {
    fixedRef.current.scrollTo({ scrollLeft: 0, scrollTop: 0 });
    fixedRef.current.scrollTo({ scrollLeft: 0 });
    fixedRef.current.scrollTo({ scrollTop: 0 });
    fixedRef.current.scrollTo({});
    fixedRef.current.scrollToItem({});
    fixedRef.current.scrollToItem({ align: "auto" });
    fixedRef.current.scrollToItem({ rowIndex: 0 });
    fixedRef.current.scrollToItem({ columnIndex: 0 });
    fixedRef.current.scrollToItem({ rowIndex: 0, columnIndex: 0 });
    fixedRef.current.scrollToItem({ align: "start", rowIndex: 0, columnIndex: 0 });
}

const variableRef = React.createRef<VariableSizeGrid>();
const VariableSizeGridTestRefs: React.FC = () => (
    <VariableSizeGrid
        columnCount={0}
        columnWidth={index => 0}
        ref={variableRef}
        rowCount={0}
        rowHeight={index => 0}
        height={0}
        width={0}
    >
        {({ style, columnIndex, rowIndex }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex}
            </div>
        )}
    </VariableSizeGrid>
);

if (variableRef.current) {
    variableRef.current.scrollTo({ scrollLeft: 0, scrollTop: 0 });
    variableRef.current.scrollTo({ scrollLeft: 0 });
    variableRef.current.scrollTo({ scrollTop: 0 });
    variableRef.current.scrollTo({});
    variableRef.current.scrollToItem({});
    variableRef.current.scrollToItem({ align: "auto" });
    variableRef.current.scrollToItem({ rowIndex: 0 });
    variableRef.current.scrollToItem({ columnIndex: 0 });
    variableRef.current.scrollToItem({ rowIndex: 0, columnIndex: 0 });
    variableRef.current.scrollToItem({ align: "start", rowIndex: 0, columnIndex: 0 });
    variableRef.current.resetAfterColumnIndex(0);
    variableRef.current.resetAfterColumnIndex(0, true);
    variableRef.current.resetAfterRowIndex(0);
    variableRef.current.resetAfterRowIndex(0, false);
    variableRef.current.resetAfterIndices({ columnIndex: 0, rowIndex: 0 });
    variableRef.current.resetAfterIndices({ columnIndex: 0, rowIndex: 0, shouldForceUpdate: true });
}

/**
 * TODO: when v2 of `react-window` cuts, remove <T as any> typing in index.d.ts and cutover to these tests
 * which use a typed `itemData`.
 */
interface ExampleItemData {
    foo: "string";
}

const FixedSizeListTestRequiredPropsV2: React.FC = () => (
    <FixedSizeList itemSize={0} height={0} itemCount={0} width={0}>
        {({ style, index }) => <div style={style}>Test {index}</div>}
    </FixedSizeList>
);

const VariableSizeListTestRequiredPropsV2: React.FC = () => (
    <VariableSizeList itemSize={index => 0} height={0} itemCount={0} width={0}>
        {({ style, index }) => <div style={style}>Test {index}</div>}
    </VariableSizeList>
);

const FixedSizeGridTestRequiredPropsV2: React.FC = () => (
    <FixedSizeGrid
        columnCount={0}
        columnWidth={0}
        rowCount={0}
        rowHeight={0}
        height={0}
        width={0}
    >
        {({ style, columnIndex, rowIndex }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex}
            </div>
        )}
    </FixedSizeGrid>
);

const VariableSizeGridTestRequiredPropsV2: React.FC = () => (
    <VariableSizeGrid
        columnCount={0}
        columnWidth={index => 0}
        rowCount={0}
        rowHeight={index => 0}
        height={0}
        width={0}
    >
        {({ style, columnIndex, rowIndex, data }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex}
            </div>
        )}
    </VariableSizeGrid>
);

const anyRefV2: React.Ref<any> = React.createRef();

const FixedSizeListTestOptionalPropsV2: React.FC<{ testBool: boolean }> = ({
    testBool,
}) => (
    <FixedSizeList
        itemSize={0}
        height={0}
        itemCount={0}
        width={0}
        className=""
        direction={testBool ? "rtl" : "ltr"}
        initialScrollOffset={0}
        innerRef={anyRef}
        innerElementType="div"
        itemData={{ foo: "bar" }}
        itemKey={index => "foo" + index.toString()}
        layout={testBool ? "vertical" : "horizontal"}
        onItemsRendered={({
            overscanStartIndex,
            overscanStopIndex,
            visibleStartIndex,
            visibleStopIndex,
        }) =>
            overscanStartIndex
            + overscanStopIndex
            + visibleStartIndex
            + visibleStopIndex}
        useIsScrolling={true}
        outerElementType="div"
        style={{ color: "cyan" }}
        overscanCount={0}
        outerRef={anyRef}
        ref={React.createRef<FixedSizeList>()}
        onScroll={({
            scrollDirection,
            scrollOffset,
            scrollUpdateWasRequested,
        }) =>
            scrollDirection === "forward"
                ? scrollUpdateWasRequested
                : scrollOffset}
    >
        {({ style, index, data }) => <div style={style}>Test {index} {data.foo}</div>}
    </FixedSizeList>
);

const VariableSizeListTestOptionalPropsV2: React.FC<{ testBool: boolean }> = ({
    testBool,
}) => (
    <VariableSizeList
        itemSize={() => 0}
        height={0}
        itemCount={0}
        width={0}
        className=""
        direction={testBool ? "rtl" : "ltr"}
        initialScrollOffset={0}
        innerRef={anyRef}
        innerElementType="div"
        itemData={{ foo: "bar" }}
        itemKey={index => "foo" + index.toString()}
        layout={testBool ? "vertical" : "horizontal"}
        onItemsRendered={({
            overscanStartIndex,
            overscanStopIndex,
            visibleStartIndex,
            visibleStopIndex,
        }) =>
            overscanStartIndex
            + overscanStopIndex
            + visibleStartIndex
            + visibleStopIndex}
        useIsScrolling={true}
        outerElementType="div"
        style={{ color: "cyan" }}
        overscanCount={0}
        outerRef={anyRef}
        ref={React.createRef<VariableSizeList>()}
        onScroll={({
            scrollDirection,
            scrollOffset,
            scrollUpdateWasRequested,
        }) =>
            scrollDirection === "forward"
                ? scrollUpdateWasRequested
                : scrollOffset}
        estimatedItemSize={0}
    >
        {({ style, index, data }) => <div style={style}>Test {index} {data.foo}</div>}
    </VariableSizeList>
);

const VariableSizeGridTestOptionalPropsV2: React.FC<{ testBool: boolean }> = ({
    testBool,
}) => (
    <VariableSizeGrid
        columnCount={0}
        columnWidth={index => 0}
        rowCount={0}
        rowHeight={index => 0}
        height={0}
        width={0}
        className=""
        direction={testBool ? "ltr" : "rtl"}
        estimatedColumnWidth={0}
        estimatedRowHeight={0}
        initialScrollLeft={0}
        initialScrollTop={0}
        innerRef={anyRef}
        innerElementType="div"
        itemData={{ foo: "bar" }}
        itemKey={({ columnIndex, rowIndex }) => columnIndex.toString() + rowIndex.toString()}
        onItemsRendered={({
            overscanColumnStartIndex,
            overscanColumnStopIndex,
            overscanRowStartIndex,
            overscanRowStopIndex,
            visibleColumnStartIndex,
            visibleColumnStopIndex,
            visibleRowStartIndex,
            visibleRowStopIndex,
        }) => undefined}
        onScroll={({
            horizontalScrollDirection,
            scrollLeft,
            scrollTop,
            scrollUpdateWasRequested,
            verticalScrollDirection,
        }) => undefined}
        outerRef={anyRef}
        outerElementType="div"
        overscanColumnCount={5}
        overscanRowCount={5}
        ref={React.createRef<VariableSizeGrid>()}
        style={{ color: "red" }}
        useIsScrolling={true}
    >
        {({ style, columnIndex, rowIndex, data }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex} {data.foo}
            </div>
        )}
    </VariableSizeGrid>
);

const RowWithAreEqualV2 = React.memo((props: ListChildComponentProps<ExampleItemData>) => {
    const { index, style, data } = props;
    return <div style={style}>Row `${index}-${data.foo}`</div>;
}, areEqual);

class RowWithShouldComponentUpdateV2 extends React.Component<
    ListChildComponentProps<ExampleItemData>
> {
    shouldComponentUpdate(...args: any[]) {
        return shouldComponentUpdate.call(this, ...args);
    }
    render() {
        const { index, style, data } = this.props;
        return <div style={style}>Row {index} {data.foo}</div>;
    }
}

const fixedRefV2 = React.createRef<FixedSizeGrid<ExampleItemData>>();
const FixedSizeGridTestRefsV2: React.FC = () => (
    <FixedSizeGrid
        columnCount={0}
        columnWidth={0}
        ref={fixedRef}
        rowCount={0}
        rowHeight={0}
        height={0}
        width={0}
    >
        {({ style, columnIndex, rowIndex, data }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex} {data.foo}
            </div>
        )}
    </FixedSizeGrid>
);

if (fixedRef.current) {
    fixedRef.current.scrollTo({ scrollLeft: 0, scrollTop: 0 });
    fixedRef.current.scrollTo({ scrollLeft: 0 });
    fixedRef.current.scrollTo({ scrollTop: 0 });
    fixedRef.current.scrollTo({});
    fixedRef.current.scrollToItem({});
    fixedRef.current.scrollToItem({ align: "auto" });
    fixedRef.current.scrollToItem({ rowIndex: 0 });
    fixedRef.current.scrollToItem({ columnIndex: 0 });
    fixedRef.current.scrollToItem({ rowIndex: 0, columnIndex: 0 });
    fixedRef.current.scrollToItem({ align: "start", rowIndex: 0, columnIndex: 0 });
}

const variableRefV2 = React.createRef<VariableSizeGrid<ExampleItemData>>();
const VariableSizeGridTestRefsV2: React.FC = () => (
    <VariableSizeGrid
        columnCount={0}
        columnWidth={index => 0}
        ref={variableRef}
        rowCount={0}
        rowHeight={index => 0}
        height={0}
        width={0}
    >
        {({ style, columnIndex, rowIndex, data }) => (
            <div style={style}>
                Test {rowIndex} {columnIndex} {data.foo}
            </div>
        )}
    </VariableSizeGrid>
);

if (variableRef.current) {
    variableRef.current.scrollTo({ scrollLeft: 0, scrollTop: 0 });
    variableRef.current.scrollTo({ scrollLeft: 0 });
    variableRef.current.scrollTo({ scrollTop: 0 });
    variableRef.current.scrollTo({});
    variableRef.current.scrollToItem({});
    variableRef.current.scrollToItem({ align: "auto" });
    variableRef.current.scrollToItem({ rowIndex: 0 });
    variableRef.current.scrollToItem({ columnIndex: 0 });
    variableRef.current.scrollToItem({ rowIndex: 0, columnIndex: 0 });
    variableRef.current.scrollToItem({ align: "start", rowIndex: 0, columnIndex: 0 });
    variableRef.current.resetAfterColumnIndex(0);
    variableRef.current.resetAfterColumnIndex(0, true);
    variableRef.current.resetAfterRowIndex(0);
    variableRef.current.resetAfterRowIndex(0, false);
    variableRef.current.resetAfterIndices({ columnIndex: 0, rowIndex: 0 });
    variableRef.current.resetAfterIndices({ columnIndex: 0, rowIndex: 0, shouldForceUpdate: true });
}
