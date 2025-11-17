import * as random from "./random"

describe("getInt", () => {
    it("should return a number within the specified range inclusive", () => {
        for (let i = 0; i < 100; i++) {
            const result = random.getInt(1, 10)
            expect(result).toBeGreaterThanOrEqual(1)
            expect(result).toBeLessThanOrEqual(10)
            expect(Number.isInteger(result)).toBe(true)
        }
    })

    it("should work with negative numbers", () => {
        for (let i = 0; i < 100; i++) {
            const result = random.getInt(-10, -1)
            expect(result).toBeGreaterThanOrEqual(-10)
            expect(result).toBeLessThanOrEqual(-1)
            expect(Number.isInteger(result)).toBe(true)
        }
    })

    it("should work with range including zero", () => {
        for (let i = 0; i < 100; i++) {
            const result = random.getInt(-5, 5)
            expect(result).toBeGreaterThanOrEqual(-5)
            expect(result).toBeLessThanOrEqual(5)
            expect(Number.isInteger(result)).toBe(true)
        }
    })

    it("should return minimum value when min = max", () => {
        const result = random.getInt(5, 5)
        expect(result).toBe(5)
    })

    it("should correctly handle fractional input numbers", () => {
        for (let i = 0; i < 100; i++) {
            const result = random.getInt(1.5, 10.7)
            expect(result).toBeGreaterThanOrEqual(2)
            expect(result).toBeLessThanOrEqual(10)
            expect(Number.isInteger(result)).toBe(true)
        }
    })

    it("should work with large numbers", () => {
        for (let i = 0; i < 10; i++) {
            const result = random.getInt(1000000, 2000000)
            expect(result).toBeGreaterThanOrEqual(1000000)
            expect(result).toBeLessThanOrEqual(2000000)
            expect(Number.isInteger(result)).toBe(true)
        }
    })

    it("should return all possible values in range on multiple calls", () => {
        const results = new Set<number>()
        const min = 1
        const max = 5

        for (let i = 0; i < 1000; i++) {
            results.add(random.getInt(min, max))
        }

        for (let i = min; i <= max; i++) {
            expect(results.has(i)).toBe(true)
        }
    })

    it("should correctly handle Math.random returning extreme values", () => {
        const mockRandom = vi.spyOn(Math, "random")

        mockRandom.mockReturnValue(0)
        expect(random.getInt(5, 10)).toBe(5)

        mockRandom.mockReturnValue(0.9999999999)
        expect(random.getInt(5, 10)).toBe(10)

        mockRandom.mockRestore()
    })
})
