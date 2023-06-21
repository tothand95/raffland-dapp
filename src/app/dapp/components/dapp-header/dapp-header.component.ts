import { Component } from '@angular/core';

import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig } from '@wagmi/core'
import { bsc } from '@wagmi/core/chains'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'

@Component({
  selector: 'app-dapp-header',
  templateUrl: './dapp-header.component.html',
  styleUrls: ['./dapp-header.component.scss']
})
export class DappHeaderComponent {
  readonly chains = [bsc];
  readonly projectId = 'YOUR_PROJECT_ID';
  web3modal: Web3Modal | null = null;

  ngOnInit(): void {

    const configureChainsResult = configureChains(
      this.chains,
      [w3mProvider({ projectId: this.projectId })]
    );
    const wagmiConfig = createConfig({
      autoConnect: true,
      connectors: w3mConnectors({ projectId: this.projectId, version: 1, chains: this.chains }),
      publicClient: configureChainsResult.publicClient
    });
    const ethereumClient = new EthereumClient(wagmiConfig, this.chains);
    this.web3modal = new Web3Modal(
      {
        projectId: this.projectId,
        themeMode: 'dark',
        defaultChain: bsc,
        enableAccountView: false 
      },
      ethereumClient
    );
  }

  onConnectWalletClick() {
    this.web3modal?.openModal();
  }
}
