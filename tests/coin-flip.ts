import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { CoinFlip } from "../target/types/coin_flip";
import * as sbv2 from "@switchboard-xyz/switchboard-v2";

describe("coin-flip", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.CoinFlip as Program<CoinFlip>;
  const provider = program.provider as anchor.AnchorProvider;
  const payer = (provider.wallet as sbv2.AnchorWallet).payer;

  it("init_client", async () => {
    // Add your test here.
    const tx = await program.methods.initClient({}).rpc();
    console.log("init_client transaction signature", tx);
  });
});
