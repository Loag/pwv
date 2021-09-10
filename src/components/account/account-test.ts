import chai, { expect } from "chai";
import { NotFoundError } from "../../utils/error";
import { getAccountDB } from "./account-data-access";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

describe("#unit", () => {
  describe("account", () => {
    describe("test db", () => {
      it("Should return true", async () => {
        expect(true).to.equal(true);
      });
    });
  });
});

describe("#integration", () => {
  describe("account", () => {
    describe("test db", () => {
      it("Should return an account", async () => {
        const account = await getAccountDB("cknnuheyw00008x1ns5miefsd");
        expect(account.name).to.equal("tester");
      });

      it("Should return a not found error", async () => {
        await expect(getAccountDB("")).to.be.rejectedWith("Not Found.");
      });

      it("Should return a malformed request error", async () => {
        await expect(getAccountDB("")).to.be.rejectedWith("Request was malformed.");
      });
    });
  });
});
