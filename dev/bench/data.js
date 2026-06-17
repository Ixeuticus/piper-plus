window.BENCHMARK_DATA = {
  "lastUpdate": 1781722639409,
  "repoUrl": "https://github.com/Ixeuticus/piper-plus",
  "entries": {
    "Python inference benchmark": [
      {
        "commit": {
          "author": {
            "email": "41669061+ayutaz@users.noreply.github.com",
            "name": "yousan",
            "username": "ayutaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcddb997dd9c3324c82e7d0da35ce72e0cf6ae43",
          "message": "docs(research): consolidate improvement survey + add A-1/A-2 deep-dive (#566)\n\n* docs(research): consolidate improvement survey + add A-1/A-2 deep-dive\n\ndev 上の 2 スナップショット (2026-06-03 / v1.12.0、 2026-06-15 / v1.13.0) を単一参照源に統合し、 意思決定で複数版を相互参照する手間を排除。 A-1 (iSTFTNet2-MB backbone 置換) と A-2 (MS-Wavehax streaming vocoder) は既存 MB-iSTFT-VITS との関係が誤解されやすいため companion ドキュメントで deep-dive。 多段階 deep-research で全 20 オープンクエスチョンを RESOLVED 5 / CONVERGED 7 / IRREDUCIBLE 8 に分類し、 文献調査で解消可能な不確定要素は closure 完了。 残るのは piper-plus 固有の PoC / 実装タスクのみ。\n\n* fix(docs): resolve markdownlint/codespell/lychee/doc-examples CI red\n\n新規 research docs に対する CI gate 4 件を解消。 (a) markdownlint の MD032 (lists 周辺の blank line) / MD040 (fenced code 言語指定) / MD029 (ordered list prefix) を一括修正、 (b) codespell の \"Appen\" (Appen 社、 OSS G2P license 議論で言及) を ignore words に追加、 (c) lychee の broken link を削除済み旧スナップショットから新統合レポートへ更新、 (d) doc-examples-gate を `--generated-at 2026-05-19` で snapshot 再生成。 PR #566 の CI を green にして merge 可能状態へ。\n\n* fix(docs): regenerate doc-examples audit snapshot for new python fence\n\n前 commit で markdownlint MD040 修正のため stft_onnx.py コメントブロックに python 言語タグを追加した結果、 audit が python=25→26 にドリフトした。 snapshot を再生成して CI gate を解消。\n\n* fix(docs): apply Copilot review feedback (counts/file ranges/flag clarity)\n\nCopilot review で指摘された 5 件の logic 不整合を修正: (1) MBiSTFTGenerator のコード位置 :133-216 を :133-296 (ファイル末尾まで) に訂正、 (2) export_onnx.py の --quantize int8|int4 を「今後追加提案」 と明示し未実装を明確化、 (3) サポート言語数 8 と並び (PT-BR/PT-EU を別表記) の不整合を「PT[BR/EU dialect] = 1 言語」 と明記、 (4) companion CONVERGED 列の件数 2 → 4 (Q10/Q11/Q12/Q17 の 4 件) に修正、 (5) README の参照行範囲も同 :133-296 に同期。",
          "timestamp": "2026-06-15T23:28:24+09:00",
          "tree_id": "6e0994722f35c425cda2b06fd150a94f5ba32f88",
          "url": "https://github.com/Ixeuticus/piper-plus/commit/fcddb997dd9c3324c82e7d0da35ce72e0cf6ae43"
        },
        "date": 1781722637917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RTF (en)",
            "value": 0.106,
            "unit": "ratio"
          },
          {
            "name": "Latency P50 (en)",
            "value": 26,
            "unit": "ms"
          },
          {
            "name": "Latency P95 (en)",
            "value": 30.6,
            "unit": "ms"
          },
          {
            "name": "Cold Start (en)",
            "value": 1388.3,
            "unit": "ms"
          },
          {
            "name": "Peak Memory (en)",
            "value": 206.9,
            "unit": "MB"
          },
          {
            "name": "Model Size (en)",
            "value": 37.6,
            "unit": "MB"
          }
        ]
      }
    ]
  }
}