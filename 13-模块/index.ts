/**
 * 模块是自声明的；两个模块之间的关系是通过在文件级别上使用imports和exports建立的。
 */
/**
 * 重新导出
 * 重新导出功能并不会在当前模块导入那个模块或定义一个新的局部变量。
 */
export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

// 导出原先的验证器但做了重命名
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";