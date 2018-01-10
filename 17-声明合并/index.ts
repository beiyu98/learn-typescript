/**
 * 最简单也最常见的声明合并类型是接口合并
 */
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };

