window.BENCHMARK_DATA = {
  "lastUpdate": 1679421031622,
  "repoUrl": "https://github.com/inspektor-gadget/inspektor-gadget",
  "entries": {
    "Gadget benchmarks": [
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "0cc1e1ffbc1a57b6bb7abf2c8b86ccf7034707d1",
          "message": "CI: benchmarks all gadgets and publish graphs",
          "timestamp": "2023-03-14T03:17:17Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1438/commits/0cc1e1ffbc1a57b6bb7abf2c8b86ccf7034707d1"
        },
        "date": 1678809891005,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 168775428,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2040468,
            "unit": "ns/op",
            "extra": "604 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 35996997,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21730442,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 54880625,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 136342444,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 196209519,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29434,
            "unit": "ns/op",
            "extra": "41226 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 169551443,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 265088924,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 136332947,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 271123194,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 168932631,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 843095442,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 100972359,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 472477478,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 157098488,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 539159,
            "unit": "ns/op",
            "extra": "2318 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 60780968,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 154319205,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 86535739,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 839640436,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 546901648,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 246440562,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 68587813,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 23166656,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 52691701,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 147282106,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 167884600,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 353739539,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 174475882,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 265339956,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 138706836,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 271689095,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 166433111,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 869021528,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 98800668,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 481173997,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 154432433,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18631788,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 57341454,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 157326880,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 85713974,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 920688084,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 553102182,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 253920022,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 362391515,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22319094,
            "unit": "ns/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 53861508,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 150512536,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 173731862,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3386510306,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 167166327,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 257448425,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 132824049,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 271870974,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 166542224,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1183138952,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 99932401,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 489961363,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 158029468,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 165644164,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 58461274,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 156850630,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 86609778,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1613838040,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 535733094,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 254447003,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3347628648,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22061298,
            "unit": "ns/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 53368654,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 143407139,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 175689591,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 35336257981,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 173323196,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 268510554,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 135747224,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 278272759,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 172068663,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4056124485,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 102767232,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 485586507,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 154757588,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1665749536,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60106428,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 157700717,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 86336480,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8346566489,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 545534011,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 261050598,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "f181148026c3b1104c0c0dc2f3c3a7f37473eeec",
          "message": "[RFC] New generic benchmarks measuring ebpf execution",
          "timestamp": "2023-03-14T03:17:17Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1441/commits/f181148026c3b1104c0c0dc2f3c3a7f37473eeec"
        },
        "date": 1678820178755,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 204497568,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2592249,
            "unit": "ns/op",
            "extra": "481 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 47215044,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22348968,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 54444224,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 154007907,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 199739619,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 37114,
            "unit": "ns/op",
            "extra": "33084 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 209369386,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 288980593,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 137248740,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 275973930,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 182717852,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 876655388,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 109880031,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 514541671,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 163608142,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 622388,
            "unit": "ns/op",
            "extra": "1874 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62012971,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 168856065,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 98538483,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 902070330,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 585878010,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 242462807,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 74345333,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20680275,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 53565510,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 157730759,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 206692105,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 443705983,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 203403700,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 277431737,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 138627442,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 284955510,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 188672557,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 895319331,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 112417072,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 495131412,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 163254312,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18546460,
            "unit": "ns/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 60485207,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 168676257,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 98457293,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 959646908,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 561216503,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 248163180,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 379302953,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20892319,
            "unit": "ns/op",
            "extra": "75 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 55427501,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 163775774,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 213632665,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4197627293,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 209600917,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 274153483,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 140141474,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 285371055,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 186165061,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1215980858,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 114887617,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 507687646,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 162431552,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167293396,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 60477837,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 164386717,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 97154122,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1711488291,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 548845586,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 245472875,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3297480772,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22855876,
            "unit": "ns/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 53384097,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 154454005,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 216742734,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 41752835440,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 198343588,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 299100910,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 154790726,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 279555870,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 184215126,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4323923939,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 111653057,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 536292122,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 161946798,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1706579183,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60171810,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 166569078,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 96392000,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9543285058,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 583633250,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 250515061,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/-traceloop",
            "value": 1032201942,
            "unit": "ns/op\t     22839 ebpfexec/op\t  10332700 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/advise-seccomp",
            "value": 1003581727,
            "unit": "ns/op\t      2360 ebpfexec/op\t   1441900 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/audit-seccomp",
            "value": 1039619846,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/profile-cpu",
            "value": 1146399562,
            "unit": "ns/op\t       192.0 ebpfexec/op\t    356100 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/snapshot-process",
            "value": 1003028214,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/snapshot-socket",
            "value": 1002391213,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/top-ebpf",
            "value": 1002964314,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/top-file",
            "value": 1080226133,
            "unit": "ns/op\t       107.0 ebpfexec/op\t    125700 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/top-tcp",
            "value": 1069514529,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-bind",
            "value": 69892,
            "unit": "ns/op\t         2.000 ebpfexec/op\t     10343 ebpfns/op",
            "extra": "18735 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-capabilities",
            "value": 1070346100,
            "unit": "ns/op\t     76717 ebpfexec/op\t  19363100 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-dns",
            "value": 1415561233,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-exec",
            "value": 1064134684,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-fsslower",
            "value": 1269284425,
            "unit": "ns/op\t        52.00 ebpfexec/op\t     41900 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-mount",
            "value": 1105128041,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-network",
            "value": 1016501490,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-oomkill",
            "value": 1035195901,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-open",
            "value": 46834,
            "unit": "ns/op\t         2.007 ebpfexec/op\t      9526 ebpfns/op",
            "extra": "23504 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-signal",
            "value": 1031452509,
            "unit": "ns/op\t        22.00 ebpfexec/op\t    218300 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-sni",
            "value": 1416154536,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-tcp",
            "value": 1253955328,
            "unit": "ns/op\t        32.00 ebpfexec/op\t    235800 ebpfns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithEvents/trace-tcpconnect",
            "value": 1134563126,
            "unit": "ns/op\t         0 ebpfexec/op\t         0 ebpfns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "8cd51c3068b9f25b5e36541bb4f215120db2f07e",
          "message": "CI: benchmarks all gadgets and publish graphs",
          "timestamp": "2023-03-14T22:00:37Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1438/commits/8cd51c3068b9f25b5e36541bb4f215120db2f07e"
        },
        "date": 1678879153236,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 189385823,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2454089,
            "unit": "ns/op",
            "extra": "540 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 41997066,
            "unit": "ns/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21639141,
            "unit": "ns/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 57194034,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 160929049,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 201663840,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 37562,
            "unit": "ns/op",
            "extra": "32430 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 197805598,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 273286840,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 140451616,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 273792032,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 178568217,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 880957221,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 104607915,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 499836509,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 160723402,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 607870,
            "unit": "ns/op",
            "extra": "2055 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 58996953,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 165500817,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 97195852,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 853164946,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 548938036,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 245373087,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 72277931,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20153190,
            "unit": "ns/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 52456400,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 156281780,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 195369450,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 412731001,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 206188112,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 277279772,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 144218501,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 262384058,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 182220568,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 908789428,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 106003394,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 500061861,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 162176898,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18394091,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 61369723,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 160969974,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 97517688,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 966389935,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 571962116,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 258944256,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 372592980,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21328473,
            "unit": "ns/op",
            "extra": "86 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 56735272,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 156993104,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 197740051,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4172558321,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 207413150,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 274402968,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 141896593,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 274304603,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 184294409,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1242019533,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 105009114,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 511056338,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 168073869,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 181349807,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 58919373,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 160734707,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 97535878,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1761795033,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 558333048,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 244339636,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3330544178,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21949800,
            "unit": "ns/op",
            "extra": "62 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 55196228,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 154467295,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 207206366,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 41529232381,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 210801800,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 277151103,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 146377456,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 282310325,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 180076588,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4315953869,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 108940150,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 504282050,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 165651436,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1712487078,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 63010148,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 163760823,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 100615815,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9629828039,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 568669648,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 240605352,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "albancrequy@microsoft.com",
            "name": "Alban Crequy",
            "username": "alban"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "901c9d58d23ebaaaf28801c2b626732d1b4f5933",
          "message": "Merge pull request #1419 from alban/alban_benchmarks\n\nCI: benchmarks all gadgets and publish graphs",
          "timestamp": "2023-03-15T12:50:06+01:00",
          "tree_id": "6ddb7f7a9915718b5aab01e00f109ff8576de6f1",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/commit/901c9d58d23ebaaaf28801c2b626732d1b4f5933"
        },
        "date": 1678881290973,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 216200218,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2368288,
            "unit": "ns/op",
            "extra": "537 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 42299567,
            "unit": "ns/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 20279197,
            "unit": "ns/op",
            "extra": "82 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 59104868,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 173423670,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 207547524,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 34504,
            "unit": "ns/op",
            "extra": "32348 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 204756062,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 285539640,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 149884853,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 301398742,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 185541192,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 937484990,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 107929230,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 521015986,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 170965519,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 604609,
            "unit": "ns/op",
            "extra": "2036 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62260598,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 170016129,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 99241187,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 942219130,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 607952233,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 272288326,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 74714067,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 23028480,
            "unit": "ns/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 58312278,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 170390242,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 217857186,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 416874099,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 220831744,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 283676248,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 148243538,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 300888124,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 186423567,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 970879135,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 107596141,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 520424316,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 183764962,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 17763540,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 61966675,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 159857679,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 102443888,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1056793927,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 603927762,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 272150365,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 355188465,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20944247,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 58429815,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 174256940,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 210649843,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4079224685,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 204478799,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 289567501,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 151981954,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 300455164,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 181223821,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1305560665,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 108404056,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 539964757,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 167757055,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167122362,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 63119080,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 165923364,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 99031691,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1797881111,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 615624306,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 274293531,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3311545273,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22796527,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 58049255,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 182960311,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 222169743,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 41402886474,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 208226805,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 280882430,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 148785842,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 305565332,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 185710383,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4389346668,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 106020619,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 516667240,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 167382609,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1651254262,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 61944791,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 160535786,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 99343433,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9622176055,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 604630355,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 273794394,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "9af8f354362d794b1ac1a1ca7958dff0c716c58a",
          "message": "docs: benchmarks",
          "timestamp": "2023-03-15T16:16:18Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1442/commits/9af8f354362d794b1ac1a1ca7958dff0c716c58a"
        },
        "date": 1678897867849,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 199501082,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2467346,
            "unit": "ns/op",
            "extra": "508 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 42527457,
            "unit": "ns/op",
            "extra": "32 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 20629212,
            "unit": "ns/op",
            "extra": "82 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 57176464,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 174510438,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 204773881,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 37912,
            "unit": "ns/op",
            "extra": "33327 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 206827825,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 281851308,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 150160621,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 296422088,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 185596483,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 912648687,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 107131113,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 518313444,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 163879712,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 610553,
            "unit": "ns/op",
            "extra": "2046 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62782894,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 161010722,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 97087307,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 936635328,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 600013380,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 275526790,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 75905632,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20551593,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 56165200,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 170044129,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 209264185,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 406890535,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 205636172,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 288818084,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 145741824,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 305676191,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 182608607,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 954230038,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 105940078,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 508558185,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 161421184,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18098126,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 62371079,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 165567394,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 97621428,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1052151914,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 597886298,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 271965441,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 360708974,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21851858,
            "unit": "ns/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 58247992,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 172880623,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 211001007,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4316482097,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 208359856,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 277397554,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 150620503,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 299437113,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 184543447,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1297825264,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 108893842,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 517584558,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 163606626,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 168289130,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 62080586,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 164327982,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 96645475,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1796252051,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 586855072,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 272710218,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3287686853,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 19726002,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 54465111,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 173582800,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 204242260,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 41567826866,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 208516173,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 277879036,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 151040714,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 304876330,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 189774558,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4473743631,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 106268242,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 511293061,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 167058888,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1692595480,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 61518262,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 166121358,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 100122056,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9463288581,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 592220800,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 272821085,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "ad9df75e47f53dd3a4cae818a8ff9df8bb31efa5",
          "message": "runtime/local: Move context and timeout management from runtime to tracers",
          "timestamp": "2023-03-15T16:16:18Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1408/commits/ad9df75e47f53dd3a4cae818a8ff9df8bb31efa5"
        },
        "date": 1678898837898,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 212463551,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2414899,
            "unit": "ns/op",
            "extra": "486 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 44816344,
            "unit": "ns/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22814886,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 57981861,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 171446484,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 205927724,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 37264,
            "unit": "ns/op",
            "extra": "32028 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 242606340,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 160596530,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 144680925,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 275341649,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 192696673,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 895487179,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 112820250,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 518674122,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 172606880,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 666493,
            "unit": "ns/op",
            "extra": "1713 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62125486,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 168924940,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 103322917,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 895077994,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 591922000,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 259666236,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 77602461,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21184777,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 58658704,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 167993112,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 221792092,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 475137679,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 255347701,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 159402915,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 146596828,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 288760921,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 201346619,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 914500501,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 110765826,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 489794600,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 173592508,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 17410412,
            "unit": "ns/op",
            "extra": "82 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 59782923,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 168217051,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 102880303,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1016769548,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 579235794,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 251878142,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 396336790,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20339892,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 58767322,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 160558375,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 216089208,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4528133272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 222586978,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 156903470,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 146557810,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 283105373,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 197363092,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1196389428,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 112865989,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 504120265,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 172028183,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 166103096,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 64685405,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 173866258,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 101056389,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1789604817,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 574724212,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 254424636,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3337680828,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 20446732,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 56669206,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 153269878,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 228793572,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 45802912233,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 224056542,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 160403263,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 140896161,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 295143993,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 189871785,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4538703889,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 111987994,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 512368767,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 172591406,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1651194596,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60185440,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 162357345,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 102896496,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9609355302,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 556531662,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 243964605,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "e5ffbee96dafaecd7f72792d1b0fc1be4fb298b2",
          "message": "docs: benchmarks",
          "timestamp": "2023-03-15T16:16:18Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1442/commits/e5ffbee96dafaecd7f72792d1b0fc1be4fb298b2"
        },
        "date": 1678900235419,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 163140080,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2009624,
            "unit": "ns/op",
            "extra": "613 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 35313806,
            "unit": "ns/op",
            "extra": "40 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21201548,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 53461212,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 142931928,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 169584249,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 28678,
            "unit": "ns/op",
            "extra": "40839 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 169256977,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 260094844,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 134570160,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 270465048,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 171141831,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 830675498,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 102169614,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 470200800,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 154516338,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 533467,
            "unit": "ns/op",
            "extra": "2379 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 59927691,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 158771953,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 86935143,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 833374614,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 529339892,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 249264334,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 67071979,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21781977,
            "unit": "ns/op",
            "extra": "98 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 53581073,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 143854249,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 172099387,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 351880002,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 173009745,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 265476866,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 136474024,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 265756720,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 169431814,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 871229749,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 100300726,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 473463453,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 154035586,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18302985,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 59438291,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 156340949,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 87337313,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 912011127,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 544744547,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 251182969,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 363808634,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22054214,
            "unit": "ns/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 55531604,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 145668721,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 166838159,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3448261589,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 170903715,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 269956019,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 135171171,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 274240188,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 170269811,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1179839738,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 102037699,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 475555537,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 151540634,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 169409968,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 60306284,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 151420319,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 91768257,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1594689318,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 539376750,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 252633665,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3290144788,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 20979841,
            "unit": "ns/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 54270851,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 148206366,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 174310930,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 34556633933,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 171834235,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 266763416,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 140734127,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 276183474,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 168705485,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4063847051,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 99044035,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 483658606,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 152063219,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1671152150,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60182655,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 155263825,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 87974125,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8368457553,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 539042833,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 249475277,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "a8b52a56b464195e3974c1af099f61cfcff03fff",
          "message": "runtime/local: Move context and timeout management from runtime to tracers",
          "timestamp": "2023-03-15T16:16:18Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1408/commits/a8b52a56b464195e3974c1af099f61cfcff03fff"
        },
        "date": 1678902307684,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 145346000,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1969555,
            "unit": "ns/op",
            "extra": "642 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 34316891,
            "unit": "ns/op",
            "extra": "42 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22442641,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 49958731,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 137166135,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 150909411,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 30166,
            "unit": "ns/op",
            "extra": "42616 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 151790293,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 132474273,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 134041684,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 258682334,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 153839866,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 828100383,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 94616555,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 458978932,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 150824700,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 369377,
            "unit": "ns/op",
            "extra": "3348 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 55061396,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 151608626,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 84381615,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 826321330,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 529048654,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 244543548,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 67430307,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 22688433,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 49413799,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 133641451,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 153402426,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 320454362,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 156215004,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 136293220,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 131823132,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 257827001,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 160590281,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 859184280,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 93217087,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 455488812,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 149142480,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18641334,
            "unit": "ns/op",
            "extra": "54 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 56187988,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 151346746,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 88830805,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 913647192,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 520320021,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 246556815,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 362933082,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 23161909,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 50142294,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 135597547,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 153913626,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3186948943,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 154839332,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 133522972,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 130174710,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 273288255,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 159200816,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1139881630,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 92774689,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 462661230,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 151179872,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167954523,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 55776919,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 150475044,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 83961588,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1528811646,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 530056380,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 247339573,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3295993662,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22260684,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 49664064,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 136432260,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 152542321,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 30977358209,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 156068491,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 132279070,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 130604767,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 269551820,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 160677249,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 3927546948,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 91736612,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 468057705,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 154387454,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1666534478,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 56862169,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 150102621,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 83707537,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 7899532291,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 525870726,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 246703046,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "1694371d04c7120588ffc0688130823c9d1003b1",
          "message": "docs: benchmarks",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1442/commits/1694371d04c7120588ffc0688130823c9d1003b1"
        },
        "date": 1678968234698,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 209858757,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2465152,
            "unit": "ns/op",
            "extra": "522 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 45105332,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22615041,
            "unit": "ns/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 56885890,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 205825731,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 215293154,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 35780,
            "unit": "ns/op",
            "extra": "32863 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 224146523,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 282878735,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 149999709,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 303268857,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 185091785,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 934217502,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 108576176,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 512473072,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 164921273,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 587058,
            "unit": "ns/op",
            "extra": "2112 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 64108887,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 167309188,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 103768101,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 936647976,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 594842902,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 271990476,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 76164017,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21266110,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 57852224,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 176949169,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 218809874,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 419852564,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 224091960,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 278094192,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 149443016,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 298817383,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 192052534,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 1003828664,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 107728214,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 515863988,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 172625602,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18096687,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 63471679,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 167719137,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 101437183,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1046117348,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 606983882,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 273802358,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 368196579,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21153153,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 57479826,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 175309774,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 223924522,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4462899694,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 234311063,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 289622239,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 150792332,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 314147242,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 196157877,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1246505924,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 106745054,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 525117206,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 169213656,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 166933518,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 63938993,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 167086012,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 101014096,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1839487453,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 617489540,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 279416038,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3258010290,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 23408483,
            "unit": "ns/op",
            "extra": "70 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 57426843,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 173417975,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 221116720,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 44092484217,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 218562814,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 286978284,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 151519951,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 296589833,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 187418133,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4423544580,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 105208046,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 516278404,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 165744399,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1653983536,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 62679131,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 168973841,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 104114311,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9619147773,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 611094342,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 277245611,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "dddcd2d2cd672b6708e70b04c463154a744e0501",
          "message": "go: bump google.golang.org/protobuf from 1.29.1 to 1.30.0",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1443/commits/dddcd2d2cd672b6708e70b04c463154a744e0501"
        },
        "date": 1678975824233,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 193244948,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1900681,
            "unit": "ns/op",
            "extra": "658 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 35146041,
            "unit": "ns/op",
            "extra": "39 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 23062783,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 51154133,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 137203714,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 165929887,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29159,
            "unit": "ns/op",
            "extra": "42208 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 189960225,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 252270053,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 132246435,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 274088559,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 161328297,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 840899704,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 98020596,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 468854818,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 152330339,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 398784,
            "unit": "ns/op",
            "extra": "3192 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62422503,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 150814086,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 85160802,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 838935160,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 535592249,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 251385908,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 67960775,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 23466366,
            "unit": "ns/op",
            "extra": "97 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 49608774,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 135935289,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 164589402,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 331202406,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 171488515,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 250148394,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 135093220,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 270668232,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 161145534,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 868690856,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 93646244,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 477944874,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 150818124,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18811412,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 61175128,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 148965435,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 84462624,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 914182779,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 531612763,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 246941618,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 359075553,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 24100888,
            "unit": "ns/op",
            "extra": "97 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 49106948,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 133553127,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 160652032,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3083554785,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 157569401,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 252732734,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 131108735,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 270330829,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 158591793,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1138994272,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 94045343,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 469382334,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 152387652,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 171614490,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 56402571,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 152016225,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 84682644,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1560965231,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 535849929,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 245167450,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3305829386,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 23397311,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 47780447,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 132394037,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 159234946,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 31123184816,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 151620665,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 250184028,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 132541168,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 268868319,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 156883468,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4019787467,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 94083110,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 463374603,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 152346050,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1634410102,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 55561194,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 148954527,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 83825404,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 7993980100,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 526927116,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 247972681,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaniel@linux.microsoft.com",
            "name": "eiffel-fl",
            "username": "eiffel-fl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ddecc2d6b4bba61927788eef8798373556b78b3",
          "message": "Merge pull request #1443 from inspektor-gadget/dependabot/go_modules/google.golang.org/protobuf-1.30.0\n\ngo: bump google.golang.org/protobuf from 1.29.1 to 1.30.0",
          "timestamp": "2023-03-16T15:12:44+01:00",
          "tree_id": "07b30dcd80b7e5133c0c060bb1542455dacf6ce0",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/commit/8ddecc2d6b4bba61927788eef8798373556b78b3"
        },
        "date": 1678976296051,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 154249856,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1976470,
            "unit": "ns/op",
            "extra": "631 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 34535250,
            "unit": "ns/op",
            "extra": "39 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 23799270,
            "unit": "ns/op",
            "extra": "98 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 48750185,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 136524549,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 156622610,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 28163,
            "unit": "ns/op",
            "extra": "41853 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 161726608,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 254988615,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 132273625,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 274370684,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 155663187,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 839929404,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 91520056,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 466290401,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 152918326,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 393233,
            "unit": "ns/op",
            "extra": "3286 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 61339286,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 152346379,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 86868719,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 851523324,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 532085347,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 247556032,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 66748402,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 22646106,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 49387573,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 135067248,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 161927816,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 324244888,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 160717196,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 254446516,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 137377543,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 272952101,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 166179064,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 878865221,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 93742757,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 471114847,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 153333073,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18740429,
            "unit": "ns/op",
            "extra": "86 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 58834600,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 153409723,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 85565417,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 920535486,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 542901126,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 246139454,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 358701106,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22104324,
            "unit": "ns/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 49054920,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 135207196,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 162376613,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3263065357,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 158926286,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 242761411,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 134659879,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 258956022,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 156002799,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1169133190,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 94541074,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 473739589,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 153559983,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 172639028,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 58502976,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 153077881,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 84087266,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1578461200,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 542599572,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 242931041,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3357659739,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21535138,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 47964286,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 136331574,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 160466501,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 32485632675,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 166034723,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 246414130,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 132657028,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 283921891,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 166805554,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4057025719,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 94724977,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 471677158,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 151866793,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1736516237,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 58796604,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 149135480,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 84233726,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8049798737,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 533470461,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 247579856,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "c679bb792eb715918d48c727e1cbb39cd00c30c2",
          "message": "Build ig distribution packages on release",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1445/commits/c679bb792eb715918d48c727e1cbb39cd00c30c2"
        },
        "date": 1678979115311,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 176571624,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2066421,
            "unit": "ns/op",
            "extra": "607 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 36858938,
            "unit": "ns/op",
            "extra": "37 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 20001029,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 55529592,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 140320305,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 183834793,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29847,
            "unit": "ns/op",
            "extra": "39468 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 228389063,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 271033089,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 138398100,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 274967784,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 176766697,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 843388794,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 101008028,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 482492634,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 154908480,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 540994,
            "unit": "ns/op",
            "extra": "2236 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62166974,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 155559762,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 88841022,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 857642244,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 543868069,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 251615472,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 70641594,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20202987,
            "unit": "ns/op",
            "extra": "90 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 54572101,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 143446696,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 184788790,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 368636577,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 192319387,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 283020181,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 137767933,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 278313183,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 173456913,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 891034810,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 99066279,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 469721151,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 155848413,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18539599,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 60041147,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 152287730,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 88932172,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 921376452,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 543404368,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 251385176,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 352214900,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20375596,
            "unit": "ns/op",
            "extra": "91 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 55015745,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 142625895,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 188254982,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3807890936,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 189673845,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 262578994,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 136333899,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 275745970,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 173031980,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1197356206,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 100989185,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 480535772,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 157483984,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 165492589,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 59001763,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 153888257,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 88776387,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1609384764,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 551503766,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 254795928,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3353252987,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 20319985,
            "unit": "ns/op",
            "extra": "90 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 56477497,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 148458266,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 191360089,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 38310259007,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 192296990,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 280220224,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 137763419,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 279680118,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 174788901,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4072078642,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 101335823,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 485544480,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 155174856,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1707369465,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 59872288,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 156124902,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 89708570,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8347867907,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 559289487,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 251582461,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "albancrequy@microsoft.com",
            "name": "Alban Crequy",
            "username": "alban"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50835b9f6f0561e70f7226eef1ce47a676fa4327",
          "message": "Merge pull request #1442 from inspektor-gadget/alban_doc_benchmarks\n\ndocs: benchmarks",
          "timestamp": "2023-03-16T16:03:39+01:00",
          "tree_id": "f7ef1f36d449344f23efcb455be0cbaa02825f98",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/commit/50835b9f6f0561e70f7226eef1ce47a676fa4327"
        },
        "date": 1678979296041,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 146559642,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1935081,
            "unit": "ns/op",
            "extra": "643 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 33476370,
            "unit": "ns/op",
            "extra": "42 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 23027687,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 52704667,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 131968594,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 147872034,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 27454,
            "unit": "ns/op",
            "extra": "43898 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 153670622,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 257817350,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 131409822,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 274490490,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 157909052,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 827377653,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 94393373,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 463520592,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 150166270,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 379469,
            "unit": "ns/op",
            "extra": "3241 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 59358940,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 151794892,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 83162708,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 836149794,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 531831256,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 247126517,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 67557589,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 24365395,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 47869864,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 137067442,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 155911146,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 303470860,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 156261310,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 258501005,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 129378443,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 274461280,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 162652938,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 871446870,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 93550587,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 463326031,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 150399972,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18875477,
            "unit": "ns/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 56209853,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 148329455,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 86451940,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 923035090,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 531605043,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 246537967,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 363435939,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22960019,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 48291209,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 135486287,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 157129663,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3058251085,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 151863540,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 250249536,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 131498167,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 268852212,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 158368190,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1215886259,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 92504270,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 467508864,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 152012386,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167117386,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 56150145,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 152359494,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 84397025,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1561860718,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 528233652,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 244578371,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3261176386,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 23739528,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 47775955,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 132724858,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 155960419,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 31037419626,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 155466307,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 252123206,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 131314949,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 278889136,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 157804336,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4063692895,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 92083357,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 468792010,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 149497704,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1694403729,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60201870,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 150968073,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 84262511,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8172225744,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 529803913,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 250793808,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "760bba3d8c456b88690e5b368c005083b5d4ccd4",
          "message": "trace/dns: Add NumAnswers and Addresses to DNS trace events",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1448/commits/760bba3d8c456b88690e5b368c005083b5d4ccd4"
        },
        "date": 1679007930438,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 239887788,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2616463,
            "unit": "ns/op",
            "extra": "450 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 53324637,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22859378,
            "unit": "ns/op",
            "extra": "66 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 59740353,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 169773064,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 224548606,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 44270,
            "unit": "ns/op",
            "extra": "25962 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 233833141,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 316637751,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 186543850,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 430194181,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 189802060,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 1022625022,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 110884633,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 564271290,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 182773419,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 630007,
            "unit": "ns/op",
            "extra": "2032 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 67753906,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 180263083,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 116847403,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 1025418198,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 659150999,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 87821986,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 23602330,
            "unit": "ns/op",
            "extra": "64 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 59236539,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 174472941,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 247194174,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 598857852,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 236609109,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 305644151,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 188714200,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 421295707,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 193415422,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 111478597,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 538361708,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 185884978,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18466944,
            "unit": "ns/op",
            "extra": "55 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 67864782,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 180875189,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 112092546,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1212747280,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 668672740,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 382088448,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 23969626,
            "unit": "ns/op",
            "extra": "64 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 58280953,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 171561663,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 222765963,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 5970736860,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 249199983,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 293103876,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 192358060,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 429836906,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 193376444,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 113364434,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 558712364,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 187113639,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167365926,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 68893503,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 176594747,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 119507192,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2563119714,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 678654370,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3333113974,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 26816294,
            "unit": "ns/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 61885971,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 191416362,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 256028900,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 60368944529,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 229488103,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 309021555,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 184147110,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 450705068,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 195356593,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 111694898,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 544363139,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 181449980,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1715941882,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 69872846,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 178134927,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 111891204,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 16094571233,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 674885628,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "13af153ec30891aa93efeebf020a3e6562d6e240",
          "message": "trace/dns: Add NumAnswers and Addresses to DNS trace events",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1448/commits/13af153ec30891aa93efeebf020a3e6562d6e240"
        },
        "date": 1679051527218,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 197753499,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1896171,
            "unit": "ns/op",
            "extra": "644 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 39267580,
            "unit": "ns/op",
            "extra": "37 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 19526862,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 59949070,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 134209882,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 157566124,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 27582,
            "unit": "ns/op",
            "extra": "42480 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 165219130,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 274923647,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 170124803,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 371725546,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 164107588,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 927644424,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 94473941,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 500147323,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 168448440,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 378889,
            "unit": "ns/op",
            "extra": "3166 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 60748797,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 158964144,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 89252378,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 924186328,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 591689663,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 70882781,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 19596980,
            "unit": "ns/op",
            "extra": "87 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 59633118,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 133630756,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 159465463,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 415906390,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 162470239,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 252582744,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 163613988,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 373669289,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 164350655,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 999294226,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 95972326,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 492507295,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 161824074,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18687469,
            "unit": "ns/op",
            "extra": "66 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 61738884,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 157489183,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 89007349,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1042330564,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 592330176,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 362378974,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20963731,
            "unit": "ns/op",
            "extra": "82 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 52899438,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 133131270,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 165741932,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4165770911,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 159335101,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 271725240,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 161307678,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 384783294,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 162930403,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1427828667,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 96640419,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 491623756,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 167634925,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 171425243,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 61441190,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 157722314,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 89777347,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2074348120,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 603942080,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3305588468,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 19987065,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 56377668,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 140458930,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 166140978,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 42051433841,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 168969646,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 264400963,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 164292647,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 376990049,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 158544868,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 6009643803,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 99188259,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 500809394,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 164284439,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1689696076,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 61264811,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 160365820,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 91771673,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 12543298270,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 597634152,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "ceacdeab9eb8a25270ba5903e50f53a1e73ca57c",
          "message": "trace/dns: Add NumAnswers and Addresses to DNS trace events",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1448/commits/ceacdeab9eb8a25270ba5903e50f53a1e73ca57c"
        },
        "date": 1679056065425,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 172956166,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1990657,
            "unit": "ns/op",
            "extra": "616 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 41457778,
            "unit": "ns/op",
            "extra": "27 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 20529578,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 57524280,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 163926506,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 179533430,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29070,
            "unit": "ns/op",
            "extra": "40390 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 175410588,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 265739361,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 173187108,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 376472623,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 179120920,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 933652062,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 103663499,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 511005930,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 167436555,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 534241,
            "unit": "ns/op",
            "extra": "2324 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 61301976,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 157425073,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 93129523,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 930845884,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 609074262,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 72811432,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20553455,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 53088556,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 143893491,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 180966644,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 454136192,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 182602403,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 276201207,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 173475513,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 386086575,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 178356797,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 1011963582,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 103410634,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 506852581,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 164395254,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 17873435,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 62323905,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 162930440,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 91735992,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1062731962,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 606073256,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 364949628,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20162589,
            "unit": "ns/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 55661692,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 146585162,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 172363488,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4429675901,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 168606508,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 268014422,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 168494044,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 383514787,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 171983321,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1487918718,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 104283359,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 502075440,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 167311413,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 163860031,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 61380923,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 158543618,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 93769198,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2137248604,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 597006530,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3292418205,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21293375,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 54590589,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 154073140,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 178455537,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 44710945548,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 179904587,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 263699363,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 167931133,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 375875038,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 173039822,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 6066966009,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 103117523,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 503083302,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 163115814,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1675702301,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 63451185,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 159614289,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 95195377,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 12916137320,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 591349895,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "8b01edb3d293584f75ce41c14b113ca9b7027856",
          "message": "Use clang-15 to compile eBPF files",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1449/commits/8b01edb3d293584f75ce41c14b113ca9b7027856"
        },
        "date": 1679058800645,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 160975896,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1919939,
            "unit": "ns/op",
            "extra": "637 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 39583413,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21887096,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 60104371,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 133222051,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 159979702,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 27928,
            "unit": "ns/op",
            "extra": "42433 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 165896029,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 264155323,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 166738514,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 375968407,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 161090132,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 929504555,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 97239929,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 486544203,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 164828653,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 381455,
            "unit": "ns/op",
            "extra": "3349 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 60342102,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 161173478,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 89875836,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 930458920,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 591006034,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 267382880,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 71207070,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20078649,
            "unit": "ns/op",
            "extra": "86 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 56425008,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 136136380,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 163462905,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 433142881,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 165065991,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 263499685,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 162824216,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 382412896,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 159447620,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 961366514,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 97717885,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 490475392,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 163475269,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18734141,
            "unit": "ns/op",
            "extra": "82 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 61126358,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 152409137,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 91611386,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1060243088,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 597374098,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 272932121,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 366783295,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 19489673,
            "unit": "ns/op",
            "extra": "87 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 60299319,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 135935556,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 164501638,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4256806755,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 164867544,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 275603472,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 166345998,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 379226406,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 170923744,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1251770070,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 95219218,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 507996649,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 165703755,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 174337692,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 61335157,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 158691751,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 91430483,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2117684129,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 599847980,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 270548133,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3347980342,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21004695,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 58919863,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 136570495,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 167968596,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 42123896248,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 171139812,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 274946343,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 160405292,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 378752531,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 168370177,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4227707608,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 97454718,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 512719756,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 161336056,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1675328351,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60628426,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 157932518,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 89418033,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 12594458127,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 599203146,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 270175162,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "2dc03cbd2f19eac31b0983f49ad1bccb352e64bf",
          "message": "trace/dns: Add NumAnswers and Addresses to DNS trace events",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1448/commits/2dc03cbd2f19eac31b0983f49ad1bccb352e64bf"
        },
        "date": 1679058855464,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 178187547,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2052900,
            "unit": "ns/op",
            "extra": "608 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 43362030,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21457726,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 55113014,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 173815022,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 186872176,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29105,
            "unit": "ns/op",
            "extra": "40171 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 179278519,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 287287140,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 169234806,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 378224696,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 179651947,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 938786724,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 102699458,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 503156488,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 165695858,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 523817,
            "unit": "ns/op",
            "extra": "2366 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 63996767,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 161855817,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 96372607,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 953279920,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 619089578,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 279431365,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 76343576,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20327940,
            "unit": "ns/op",
            "extra": "74 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 55126957,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 149111725,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 192626769,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 470661074,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 195053688,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 290396351,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 166713979,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 385608074,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 179343552,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 1008414194,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 104885551,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 511681542,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 171956032,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18009014,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 61247904,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 163295176,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 98244652,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1078999279,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 600974920,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 268003915,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 370291803,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 19960312,
            "unit": "ns/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 53701912,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 148997341,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 189791923,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4784588699,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 192104476,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 290695604,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 174725196,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 391282649,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 182947720,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1447430961,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 105310767,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 506736432,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 172839801,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 165546473,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 63839586,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 161435078,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 98300926,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2167133783,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 635635234,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 276681707,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3250359412,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21083763,
            "unit": "ns/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 55060903,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 151515445,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 188288906,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 47961467048,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 194892876,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 282534533,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 177373473,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 397271490,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 179310774,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 6147666579,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 104299861,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 523457740,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 164729510,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1661578038,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60872075,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 164657166,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 98412412,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 13201676971,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 621321339,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 275817335,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "590c0dfd73a495e64611055a234031e27252b30f",
          "message": "trace/network: Use ticker to query results",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1439/commits/590c0dfd73a495e64611055a234031e27252b30f"
        },
        "date": 1679060192892,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 173869766,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2057454,
            "unit": "ns/op",
            "extra": "596 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 36875181,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21700415,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 55078969,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 144316757,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 177997555,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29366,
            "unit": "ns/op",
            "extra": "40656 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 183754951,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 143167194,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 135197911,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 275892212,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 169089116,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 847819735,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 101012895,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 481796313,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 159136388,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 541397,
            "unit": "ns/op",
            "extra": "2228 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 58899972,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 155345325,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 87642547,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 849344740,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 542595405,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 247113317,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 72813145,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20257155,
            "unit": "ns/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 55457602,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 143130711,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 185912625,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 373989839,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 198295094,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 141146293,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 135422336,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 260450909,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 172546094,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 879567002,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 102252370,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 491109441,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 156025433,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18353566,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 58258730,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 154917998,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 91957642,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 927146090,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 545625160,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 250726147,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 359041851,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20103773,
            "unit": "ns/op",
            "extra": "86 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 55628315,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 143893684,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 190654454,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3936464213,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 202566739,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 142106466,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 138181478,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 276697936,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 172614642,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1179097783,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 99738620,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 483964221,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 156740086,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 170020789,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 59577922,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 157480737,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 89059528,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1582867677,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 550834388,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 245043677,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3305616026,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22468121,
            "unit": "ns/op",
            "extra": "87 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 53441382,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 143158837,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 177893311,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 35868420568,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 184255337,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 144658057,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 136286484,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 276790008,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 173181049,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4143404062,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 98857303,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 475105404,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 156672015,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1698362489,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 59537095,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 158188704,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 89618662,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8253453706,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 541537472,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 253764694,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "530f38935a9288b36ed22e096c6a4d88e1a78ce5",
          "message": "Build ig distribution packages on release",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1445/commits/530f38935a9288b36ed22e096c6a4d88e1a78ce5"
        },
        "date": 1679065024086,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 146460956,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1958762,
            "unit": "ns/op",
            "extra": "628 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 37712372,
            "unit": "ns/op",
            "extra": "40 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 23027013,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 50147803,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 132400288,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 149452083,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 27227,
            "unit": "ns/op",
            "extra": "44070 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 151721851,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 246396731,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 135101562,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 266512097,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 156112789,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 846394280,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 91664883,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 458030602,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 147631766,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 396857,
            "unit": "ns/op",
            "extra": "3272 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 59054511,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 161034646,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 83908133,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 840804470,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 531800658,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 248045396,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 69252810,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 22488664,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 48559184,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 134190797,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 154579996,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 308081577,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 159896614,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 246714318,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 132949408,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 270527470,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 158786490,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 880937769,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 90244369,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 461951615,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 155288318,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18483688,
            "unit": "ns/op",
            "extra": "66 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 55104511,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 147214753,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 85044335,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 909645866,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 529004576,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 244843778,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 364565777,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21423042,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 47863936,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 130570694,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 154568270,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3171475909,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 154187320,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 241706660,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 133943458,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 279231980,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 158199348,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1157373699,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 94350720,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 475557441,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 149286937,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 169263073,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 57923725,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 151249907,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 83597886,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1543569505,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 537247878,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 247162031,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3341343794,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22871051,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 48341499,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 130311259,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 155057613,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 30947715396,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 157972677,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 250226146,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 133741579,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 270104350,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 158462166,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 3975447030,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 94735136,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 472542593,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 153119134,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1670538217,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 57026637,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 147522534,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 83179649,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8054913197,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 531945893,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 250343381,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "7ccf7143b378697e8314ded4de407d3d52303890",
          "message": "runtime/local: Move context and timeout management from runtime to tracers",
          "timestamp": "2023-03-16T02:46:52Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1408/commits/7ccf7143b378697e8314ded4de407d3d52303890"
        },
        "date": 1679067429459,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 197936139,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1898549,
            "unit": "ns/op",
            "extra": "649 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 33932675,
            "unit": "ns/op",
            "extra": "42 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 24133501,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 52014446,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 131979467,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 155929743,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 27819,
            "unit": "ns/op",
            "extra": "41920 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 156753444,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 135799552,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 131589262,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 273081963,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 152664330,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 837593766,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 92937868,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 478023823,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 150904724,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 385565,
            "unit": "ns/op",
            "extra": "3216 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 57944220,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 151519850,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 84204783,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 827257178,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 528697387,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 247838914,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 65939404,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 23570230,
            "unit": "ns/op",
            "extra": "99 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 50094915,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 136890707,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 159647189,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 318322027,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 158476319,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 134106021,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 132211912,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 268416090,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 160519631,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 863434687,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 91548373,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 460883574,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 155828215,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18541742,
            "unit": "ns/op",
            "extra": "82 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 57845064,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 150468583,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 84958863,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 925319788,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 545572408,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 247794690,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 363316378,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22716426,
            "unit": "ns/op",
            "extra": "98 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 48925480,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 142539189,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 161659334,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3198910415,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 168533689,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 134612860,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 130699279,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 264088067,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 157999906,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1163801734,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 92240804,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 468932152,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 149740206,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 171364978,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 57832029,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 149104464,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 84620989,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1558156982,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 534731985,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 244387412,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3272587536,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21826371,
            "unit": "ns/op",
            "extra": "97 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 47747230,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 132117383,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 161024976,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 31818732111,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 166513766,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 135176168,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 131873850,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 276082814,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 164509818,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4009885599,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 92210502,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 468130425,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 147583597,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1675662452,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 57494852,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 151960906,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 85153835,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 7944679350,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 537656272,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 252740213,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "d98c6df73d1861f4feb4bc5fbbfc3bec067bf2c8",
          "message": "snapshot socket: improve performances",
          "timestamp": "2023-03-19T16:20:03Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1451/commits/d98c6df73d1861f4feb4bc5fbbfc3bec067bf2c8"
        },
        "date": 1679312604292,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 281585067,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2092507,
            "unit": "ns/op",
            "extra": "591 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 38841277,
            "unit": "ns/op",
            "extra": "37 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 20653213,
            "unit": "ns/op",
            "extra": "91 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 54644609,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 144802017,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 182369731,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 372466682,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 189170828,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 268191236,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 137016935,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 274991226,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 171253000,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 848889447,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 100681312,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 479873953,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 158076862,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 527640,
            "unit": "ns/op",
            "extra": "2341 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62633697,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 161824807,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 92017665,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 858420588,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 552350770,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 251321217,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 69849353,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21053292,
            "unit": "ns/op",
            "extra": "91 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 55578452,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 142149823,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 189958885,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 377602488,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 190830158,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 268439688,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 138482482,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 263848099,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 169707802,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 894420019,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 99344960,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 472759758,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 158876152,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 17569518,
            "unit": "ns/op",
            "extra": "66 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 60000588,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 154852347,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 90249313,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 938648352,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 541543041,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 254385440,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 369467411,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20170116,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 53277129,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 144721137,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 185409435,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 375016783,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 191071047,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 259792357,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 143648038,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 273150972,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 176191099,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1197327730,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 102461633,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 485178976,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 160011915,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 166741266,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 60987890,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 159038696,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 88642243,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1594946603,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 542935619,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 257422121,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3279501630,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21546964,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 54084584,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 152687281,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 184883548,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 389351904,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 186798944,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 272380341,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 137836451,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 272520752,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 168550238,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4075856000,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 98408920,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 481424243,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 156319413,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1649763695,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60817810,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 153819017,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 91317700,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8440789235,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 543070845,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 248806158,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "329da940540f67d74068b15a984c08eae0e2ec16",
          "message": "ci: bump actions/setup-go from 3 to 4",
          "timestamp": "2023-03-19T16:20:03Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1452/commits/329da940540f67d74068b15a984c08eae0e2ec16"
        },
        "date": 1679317588945,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 145095037,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1990648,
            "unit": "ns/op",
            "extra": "640 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 33577999,
            "unit": "ns/op",
            "extra": "42 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 23130018,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 49211227,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 131175071,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 154119080,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 27525,
            "unit": "ns/op",
            "extra": "43650 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 186667998,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 244399665,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 131621668,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 268205824,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 158621550,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 833775999,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 93178638,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 459892896,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 153944964,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 393245,
            "unit": "ns/op",
            "extra": "3216 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 57977855,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 153489941,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 86222367,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 836183042,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 530714162,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 250911087,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 67193125,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 24013718,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 46674826,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 136821743,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 159567765,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 310156757,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 156201172,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 253408934,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 136246389,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 268006886,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 156857873,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 873108770,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 93685849,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 457278125,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 149763566,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18379113,
            "unit": "ns/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 57944905,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 153027920,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 86009186,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 913843378,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 534448588,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 252095903,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 352379901,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22615570,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 48722954,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 135244210,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 161419902,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3143750318,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 162021213,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 252475452,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 139033554,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 274008417,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 157740050,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1161619327,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 92437137,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 465291774,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 150597741,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 169085923,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 57877304,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 154936844,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 83501849,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1553062383,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 527477624,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 249416767,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3315435865,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21490769,
            "unit": "ns/op",
            "extra": "97 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 49407713,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 130886937,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 158465062,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 31659018527,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 165314394,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 248453819,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 135146288,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 271508096,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 162284285,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4127093206,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 92309238,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 473471024,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 154939092,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1694657357,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 61159026,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 149724224,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 85044176,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8103325105,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 531589110,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 256721026,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "4f325d5e5739a7935e443310081428f664d34c75",
          "message": "go: bump k8s.io/api from 0.26.2 to 0.26.3",
          "timestamp": "2023-03-19T16:20:03Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1453/commits/4f325d5e5739a7935e443310081428f664d34c75"
        },
        "date": 1679318345395,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 161424490,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2017096,
            "unit": "ns/op",
            "extra": "613 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 35922736,
            "unit": "ns/op",
            "extra": "39 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22393163,
            "unit": "ns/op",
            "extra": "99 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 59538638,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 140185854,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 175110805,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 28892,
            "unit": "ns/op",
            "extra": "39967 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 172512138,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 261053257,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 135492348,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 276239358,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 168507158,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 836456183,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 102754981,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 471024953,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 156189733,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 539676,
            "unit": "ns/op",
            "extra": "2388 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 59709883,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 156223364,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 89575027,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 840837833,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 549170694,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 250056164,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 67104555,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 22236170,
            "unit": "ns/op",
            "extra": "97 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 53492986,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 143989713,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 176810431,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 355619891,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 176626305,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 275388673,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 136617785,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 273666355,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 166436628,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 895760072,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 98902531,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 469551532,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 159927724,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18171251,
            "unit": "ns/op",
            "extra": "62 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 60321781,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 150110126,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 88104952,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 919396696,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 544331556,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 254056073,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 370958491,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22315254,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 52025824,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 144765440,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 171418289,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3662088801,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 179837278,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 262209513,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 136490634,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 274541314,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 176165214,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1182831647,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 101472358,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 483675949,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 156827278,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 162377790,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 60887499,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 157438482,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 88513308,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1616355188,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 539196701,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 250889804,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3293765754,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21581255,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 53821488,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 181703087,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 174782087,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 35753425103,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 190433477,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 267945233,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 136398146,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 284880510,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 165148476,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4031743921,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 100383139,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 479244089,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 154622607,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1652481503,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 58717537,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 156809925,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 87889780,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8362027444,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 548295716,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 250227679,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "611d8bf102b41f6b7a7b94646ef9f827ad6ca929",
          "message": "go: bump k8s.io/apimachinery from 0.26.2 to 0.26.3",
          "timestamp": "2023-03-19T16:20:03Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1454/commits/611d8bf102b41f6b7a7b94646ef9f827ad6ca929"
        },
        "date": 1679318628386,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 217273926,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2829932,
            "unit": "ns/op",
            "extra": "384 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 47322370,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 19746652,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 56685651,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 172219732,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 227571188,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 40097,
            "unit": "ns/op",
            "extra": "29383 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 238183451,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 285236476,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 148656928,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 290430429,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 191336184,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 910261805,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 109177741,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 519854682,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 172976897,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 663520,
            "unit": "ns/op",
            "extra": "2011 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 64197799,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 169357455,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 110479149,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 915287904,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 594202346,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 268094531,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 81975224,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21638076,
            "unit": "ns/op",
            "extra": "66 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 57143563,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 174265523,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 251492769,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 503901122,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 238766697,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 282240979,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 147810726,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 306540714,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 182568522,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 1005759391,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 107839130,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 524381298,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 171202382,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18670588,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 62762905,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 171619726,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 103242972,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1035779813,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 591777562,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 259497862,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 370692895,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22607070,
            "unit": "ns/op",
            "extra": "58 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 57542110,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 176351653,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 246718823,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4862839296,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 244142184,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 289916910,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 148100153,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 294545462,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 188464532,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1279985632,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 107617636,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 523798801,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 174186368,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 173011651,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 62336607,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 166810545,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 103089985,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1861299940,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 584090908,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 259974190,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3308539077,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22774098,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 59025775,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 178363229,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 236015310,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 47266226865,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 256321418,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 290980806,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 144519011,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 307930447,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 197681851,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4583829197,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 112266602,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 523519870,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 171082626,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1681337422,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 61086777,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 171866937,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 102924584,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 10303064505,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 599748320,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 256582228,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "d2cf097cbd33fe6f0f1a4265e51a7930231b8235",
          "message": "go: bump k8s.io/client-go from 0.26.2 to 0.26.3",
          "timestamp": "2023-03-19T16:20:03Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1455/commits/d2cf097cbd33fe6f0f1a4265e51a7930231b8235"
        },
        "date": 1679318702690,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 175202603,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2075908,
            "unit": "ns/op",
            "extra": "598 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 37189930,
            "unit": "ns/op",
            "extra": "39 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 23570282,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 54870409,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 143344195,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 192077898,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29497,
            "unit": "ns/op",
            "extra": "40302 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 193243687,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 263125181,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 136982720,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 271905196,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 169603219,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 847303966,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 101641192,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 485033536,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 155608160,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 538113,
            "unit": "ns/op",
            "extra": "2295 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 59549400,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 155990348,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 88790420,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 840566385,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 542454682,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 259412119,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 68421963,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21270388,
            "unit": "ns/op",
            "extra": "91 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 54967549,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 145882398,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 180559265,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 355662823,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 183359519,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 269843341,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 135996735,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 270442124,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 173182629,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 868865496,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 101483010,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 479766697,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 156959241,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 17948849,
            "unit": "ns/op",
            "extra": "61 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 60674048,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 160737410,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 89824902,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 923699792,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 547391707,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 251826141,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 352911644,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20805612,
            "unit": "ns/op",
            "extra": "90 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 56342515,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 145219980,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 198033733,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3868549859,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 182750299,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 268277172,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 137555993,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 277397772,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 178281291,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1214942300,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 102393348,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 481334304,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 157708927,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 168142328,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 60774192,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 154958960,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 87709484,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1622645874,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 556039825,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 253722504,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3295999997,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21063546,
            "unit": "ns/op",
            "extra": "86 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 53361655,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 144755530,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 183641812,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 37691195757,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 200946544,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 274745025,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 139012873,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 273892616,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 178846577,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4107744338,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 103033668,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 486259098,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 158909786,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1650108445,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 59472014,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 155894649,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 87195601,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8315396155,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 567531104,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 252685173,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "a94ead8920ce8e8a825e7392b229a566c016425e",
          "message": "go: bump k8s.io/cri-api from 0.26.2 to 0.26.3",
          "timestamp": "2023-03-19T16:20:03Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1456/commits/a94ead8920ce8e8a825e7392b229a566c016425e"
        },
        "date": 1679318924178,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 170238213,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2081689,
            "unit": "ns/op",
            "extra": "604 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 37030990,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22075156,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 55041820,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 145993026,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 179902101,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29275,
            "unit": "ns/op",
            "extra": "42010 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 178362972,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 259459661,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 135825793,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 276966584,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 171162741,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 846185558,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 101553759,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 478638932,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 154463977,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 532415,
            "unit": "ns/op",
            "extra": "2157 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 60157747,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 154770431,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 92472666,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 845773425,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 541778804,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 244268819,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 69284604,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21921444,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 56684646,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 148919867,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 190112560,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 369625957,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 186204470,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 270759032,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 136696697,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 266971235,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 170509699,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 875555758,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 100358998,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 475254891,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 154681504,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18603519,
            "unit": "ns/op",
            "extra": "64 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 57169868,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 156849948,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 91939397,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 919840796,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 545777480,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 252283713,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 370596422,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20419928,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 55960065,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 149237636,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 189655924,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3804645779,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 196668910,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 267078603,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 141028458,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 278322807,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 167440347,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1177647906,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 100924909,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 481021004,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 155028748,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167513598,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 58601848,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 153864725,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 89395482,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1603795457,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 545019000,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 252526396,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3345247984,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21200913,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 52688709,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 148830392,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 186636619,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 37143957500,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 191354781,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 263189216,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 138677515,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 280560432,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 174290390,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4075751574,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 102663826,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 477178347,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 155422603,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1662874142,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 59833778,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 153860139,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 89265794,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8508090160,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 537748300,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 255003562,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "0b279ebd6c3352414a7a008cb6279542caab9607",
          "message": "go: bump k8s.io/cli-runtime from 0.26.2 to 0.26.3",
          "timestamp": "2023-03-19T16:20:03Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1457/commits/0b279ebd6c3352414a7a008cb6279542caab9607"
        },
        "date": 1679319150329,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 148113900,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1904441,
            "unit": "ns/op",
            "extra": "655 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 33281988,
            "unit": "ns/op",
            "extra": "42 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22296057,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 49310686,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 132766556,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 150641479,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 27571,
            "unit": "ns/op",
            "extra": "42894 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 170247824,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 262582275,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 130429302,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 270932145,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 157060300,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 826764382,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 93210624,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 458405128,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 153471954,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 387116,
            "unit": "ns/op",
            "extra": "3225 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 56411118,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 151871002,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 84167528,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 828605912,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 525821218,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 242975094,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 66913471,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 23568010,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 48062027,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 135058984,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 154235925,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 306329130,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 155148935,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 246645097,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 135997650,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 266765851,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 163691481,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 864715691,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 93748134,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 472347687,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 149300771,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18706740,
            "unit": "ns/op",
            "extra": "62 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 58921851,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 151265955,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 84790050,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 906568145,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 533406222,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 247171890,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 365849905,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 23528541,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 49842158,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 133616833,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 155212010,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3153983797,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 154168541,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 236038170,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 135893354,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 270917037,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 155604388,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1160561492,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 94149856,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 473441720,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 151850356,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167016548,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 58207890,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 150754163,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 84510240,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1543698392,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 529191532,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 250717158,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3348871446,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22616301,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 48351484,
            "unit": "ns/op",
            "extra": "30 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 142791483,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 157917614,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 30959241104,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 158754502,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 247439468,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 133164880,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 270858685,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 155703457,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 3987707573,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 90473241,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 472425447,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 148872742,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1693811831,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 55632026,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 150394784,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 83768689,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8021293110,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 527961954,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 241391048,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaniel@linux.microsoft.com",
            "name": "eiffel-fl",
            "username": "eiffel-fl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b536a3f2c39e5ae69358b3002747856b25bf9fe",
          "message": "Merge pull request #1452 from inspektor-gadget/dependabot/github_actions/actions/setup-go-4\n\nci: bump actions/setup-go from 3 to 4",
          "timestamp": "2023-03-20T14:25:23+01:00",
          "tree_id": "392ddfd346c366dc4644eec703a9451bb1f4307b",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/commit/1b536a3f2c39e5ae69358b3002747856b25bf9fe"
        },
        "date": 1679320125230,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 268115884,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2368801,
            "unit": "ns/op",
            "extra": "522 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 42679334,
            "unit": "ns/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21683220,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 58175547,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 171524434,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 202025780,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 35633,
            "unit": "ns/op",
            "extra": "32812 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 215957879,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 252205147,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 152093105,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 300120783,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 185934053,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 1004159514,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 107701378,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 501389970,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 158316118,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 597648,
            "unit": "ns/op",
            "extra": "2090 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 63039357,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 164997290,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 103228962,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 898771442,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 598210180,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 276514881,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 77463054,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21374207,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 55723024,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 168282805,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 215341312,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 404995331,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 205672044,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 288147067,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 152675937,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 300802722,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 187110329,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 988145135,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 105315092,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 506944348,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 168369329,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18026647,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 63646182,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 165749739,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 101154364,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1024640498,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 618193300,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 272285155,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 370250382,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20788693,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 56453603,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 177481387,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 206502911,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4084476095,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 209580577,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 268310026,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 150907101,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 306059535,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 183416725,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1233042898,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 106067374,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 522960782,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 167459715,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 166199347,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 64097853,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 166370656,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 105308087,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1794599992,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 609499978,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 272613764,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3291474313,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21444159,
            "unit": "ns/op",
            "extra": "75 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 58199279,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 168269010,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 206610134,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 41733051844,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 209921653,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 284221634,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 147842491,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 308043899,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 184184788,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4479807929,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 106242666,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 516367808,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 165771054,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1651598559,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 68338023,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 164305479,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 97994404,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 9435456508,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 615465496,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 272664278,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaniel@linux.microsoft.com",
            "name": "eiffel-fl",
            "username": "eiffel-fl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20cfe10589e96b01532c563522ac8bbe9a547cb8",
          "message": "Merge pull request #1457 from inspektor-gadget/dependabot/go_modules/k8s.io/cli-runtime-0.26.3\n\ngo: bump k8s.io/cli-runtime from 0.26.2 to 0.26.3",
          "timestamp": "2023-03-20T15:02:26+01:00",
          "tree_id": "beeb56cafabbc8148a722e10a51e60482dc05583",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/commit/20cfe10589e96b01532c563522ac8bbe9a547cb8"
        },
        "date": 1679321682960,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 168569489,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2058655,
            "unit": "ns/op",
            "extra": "606 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 36646358,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 20626562,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 53678299,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 143747339,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 178507979,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 28825,
            "unit": "ns/op",
            "extra": "40748 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 181985764,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 264584651,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 135543602,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 274154508,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 172428992,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 854807295,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 102051484,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 480150192,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 153419422,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 540009,
            "unit": "ns/op",
            "extra": "2281 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 59985247,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 154584439,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 89480432,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 846970794,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 552526678,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 253396659,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 69660299,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20271834,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 50637308,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 144072578,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 180990386,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 368170819,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 183815983,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 280892232,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 135648843,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 271284136,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 168710273,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 886196979,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 101744727,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 476942842,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 154983107,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18049615,
            "unit": "ns/op",
            "extra": "82 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 59748382,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 157126345,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 88879618,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 907990792,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 538937266,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 246665746,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 348267517,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21093058,
            "unit": "ns/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 55428466,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 143445605,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 181067809,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3653654921,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 187432916,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 272978249,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 144295432,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 271782604,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 174685091,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1174307373,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 101243256,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 467325737,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 159173555,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 165363505,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 58566990,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 159950185,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 89919141,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1589036287,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 534828854,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 252760169,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3285507715,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21454103,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 51785865,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 148868976,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 185715854,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 36514076346,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 187832670,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 260277240,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 135934614,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 280881010,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 170279178,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4130447343,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 100852094,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 496220774,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 158000538,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1660487238,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 58754258,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 153540749,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 89669897,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8377806582,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 548797759,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 255456700,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaniel@linux.microsoft.com",
            "name": "eiffel-fl",
            "username": "eiffel-fl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2abfdd99668c7b554c72f3bb414296b5c74cd647",
          "message": "Merge pull request #1456 from inspektor-gadget/dependabot/go_modules/k8s.io/cri-api-0.26.3\n\ngo: bump k8s.io/cri-api from 0.26.2 to 0.26.3",
          "timestamp": "2023-03-20T15:15:39+01:00",
          "tree_id": "534dbc145358cabdc30a6698b7f34e737de57db9",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/commit/2abfdd99668c7b554c72f3bb414296b5c74cd647"
        },
        "date": 1679322942547,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 189447271,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1877660,
            "unit": "ns/op",
            "extra": "649 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 33242186,
            "unit": "ns/op",
            "extra": "42 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 23484834,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 50656822,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 150732205,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 149190624,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 27396,
            "unit": "ns/op",
            "extra": "44324 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 150218986,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 248412377,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 128147636,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 258932960,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 159107335,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 814480847,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 91768643,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 458559630,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 149336954,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 376825,
            "unit": "ns/op",
            "extra": "3417 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 56032111,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 148571220,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 81471140,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 840026804,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 528336286,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 244353737,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 64422535,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 23557958,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 48952574,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 133217712,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 146311099,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 298326194,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 152820592,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 241160938,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 130024873,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 257642811,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 158212813,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 858804304,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 91676721,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 465063845,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 150879315,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18501038,
            "unit": "ns/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 56078611,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 149164036,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 82247300,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 917262852,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 530818062,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 241609809,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 357766252,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22802672,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 47837700,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 131128057,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 153400312,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3033969929,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 161221547,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 252072703,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 132908891,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 271763805,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 157447366,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1141490972,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 92853596,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 475155131,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 149406928,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 168856327,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 55719203,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 150730097,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 86022563,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1533105246,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 521947114,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 244194083,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3344860302,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 23203275,
            "unit": "ns/op",
            "extra": "99 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 48879352,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 131628892,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 150734703,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 30627179395,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 154244193,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 254698631,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 131551670,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 269943283,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 156977015,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 3906127526,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 91278731,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 458967202,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 150526187,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1685000799,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 55367976,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 148559669,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 83625388,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 7865625275,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 530843302,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 244162717,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "d3b9da400c386c4dfdde26dd8c0bc70fd630c0c9",
          "message": "snapshot socket: improve performances",
          "timestamp": "2023-03-19T16:20:03Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1451/commits/d3b9da400c386c4dfdde26dd8c0bc70fd630c0c9"
        },
        "date": 1679326206272,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 154349342,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1921537,
            "unit": "ns/op",
            "extra": "651 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 34798415,
            "unit": "ns/op",
            "extra": "40 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 23645213,
            "unit": "ns/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 47196682,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 135216250,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 159758478,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 375333919,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 155391690,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 248263191,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 132771028,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 271547649,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 159179229,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 845102148,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 92215720,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 471468279,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 152632190,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 387457,
            "unit": "ns/op",
            "extra": "3296 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 58987661,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 154134956,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 86071159,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 851116570,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 529556461,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 250509590,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 67151043,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 22990128,
            "unit": "ns/op",
            "extra": "99 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 46916357,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 133057503,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 153912500,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 343900323,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 153995068,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 246223082,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 135892203,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 271530577,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 162651716,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 876706198,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 93210729,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 477059536,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 148251810,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18404386,
            "unit": "ns/op",
            "extra": "64 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 55071247,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 147577905,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 84688256,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 925556266,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 538351675,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 249028261,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 355140014,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22620086,
            "unit": "ns/op",
            "extra": "99 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 47748382,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 130712271,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 158932719,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 335092502,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 161060229,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 246660369,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 133979738,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 270584281,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 157911741,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1146274857,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 90633573,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 469589703,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 150878979,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 173881867,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 53818819,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 150047196,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 83456139,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1547479675,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 548340948,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 246764674,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3305826126,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21711461,
            "unit": "ns/op",
            "extra": "97 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 48532389,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 139321530,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 150981832,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 360856248,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 161208679,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 246973334,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 131943010,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 272533950,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 160603430,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 3987885036,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 91849764,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 472145982,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 148825484,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1678947299,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60188905,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 150941094,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 83983270,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8043917108,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 527829611,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 251622758,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "c429007c6c9c89218b54ab1536aa41fcda22d8d6",
          "message": "pkg: Print error messages for traceloop eBPF code.",
          "timestamp": "2023-03-19T16:20:03Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1458/commits/c429007c6c9c89218b54ab1536aa41fcda22d8d6"
        },
        "date": 1679327086682,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 155132674,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1978664,
            "unit": "ns/op",
            "extra": "637 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 34425289,
            "unit": "ns/op",
            "extra": "40 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 23251421,
            "unit": "ns/op",
            "extra": "98 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 50185540,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 132417737,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 161022984,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29499,
            "unit": "ns/op",
            "extra": "42516 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 161715801,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 265369712,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 133856543,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 258359114,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 162338464,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 824660983,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 92863071,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 475460609,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 153944622,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 390496,
            "unit": "ns/op",
            "extra": "3237 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 58606053,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 155659424,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 85317571,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 834702612,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 538118989,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 247084456,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 66702423,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 22634130,
            "unit": "ns/op",
            "extra": "99 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 49004343,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 137337036,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 158150226,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 335703674,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 157061582,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 260065149,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 134423762,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 277815862,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 155704450,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 880605504,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 93329248,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 457788208,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 149963918,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18715547,
            "unit": "ns/op",
            "extra": "62 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 58526748,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 149834175,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 84873835,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 903580686,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 528054340,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 251444504,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 371936740,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 24172847,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 49133532,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 134156249,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 160572672,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3249417478,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 168230490,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 253873099,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 132695107,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 277995390,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 158245516,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1176633250,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 95673647,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 459441000,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 150202042,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167196902,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 58534832,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 154824949,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 84179119,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1560024054,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 537594702,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 245906431,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3338287435,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 23280950,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 48945486,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 134227604,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 160245960,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 32750495706,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 162013589,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 242136542,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 135002518,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 274995137,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 159000021,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4010345662,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 94445871,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 475932948,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 148871676,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1693396259,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 61319570,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 155211095,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 84945948,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8127168869,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 535958026,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 247995334,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "79004af0ff7bf7f909f5f34b24055c4ee5caeb66",
          "message": "pkg: Print error messages for traceloop eBPF code.",
          "timestamp": "2023-03-19T16:20:03Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1458/commits/79004af0ff7bf7f909f5f34b24055c4ee5caeb66"
        },
        "date": 1679329229028,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 170676100,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2014318,
            "unit": "ns/op",
            "extra": "621 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 36909681,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21882135,
            "unit": "ns/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 52907217,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 165879953,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 180291187,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29479,
            "unit": "ns/op",
            "extra": "41239 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 180239237,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 266590163,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 145280760,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 273207606,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 171427817,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 836710606,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 99633007,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 471183522,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 155232213,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 516841,
            "unit": "ns/op",
            "extra": "2383 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 59393412,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 152660372,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 88908976,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 861625776,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 544777490,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 248046949,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 69934806,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21279697,
            "unit": "ns/op",
            "extra": "90 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 53886147,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 143608106,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 181045648,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 356038925,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 177367280,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 268846252,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 138454835,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 273672702,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 168182830,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 879977584,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 102844132,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 472843343,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 155549785,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18095538,
            "unit": "ns/op",
            "extra": "66 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 58623916,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 152623922,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 88845965,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 907802864,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 537589116,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 250929328,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 355700625,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21119504,
            "unit": "ns/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 54376879,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 145986908,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 174957910,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3621861147,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 179979459,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 267242049,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 135142222,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 274779919,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 170866862,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1175332307,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 100895427,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 477166037,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 152621574,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 170025068,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 61179099,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 153804209,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 90296441,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1640481226,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 555915428,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 253475447,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3299215622,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 20595512,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 53636352,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 150327035,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 180165693,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 37125073774,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 192232594,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 263550352,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 135478787,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 274380621,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 166273413,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4067185153,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 99990112,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 494490186,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 158981198,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1699010027,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60021799,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 151986370,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 88402821,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8443564453,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 560991303,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 257636311,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "1d73eeaf866b93339a6a9f6aee29f6fdffcabb4a",
          "message": "snapshot socket: improve performances",
          "timestamp": "2023-03-21T11:07:09Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1451/commits/1d73eeaf866b93339a6a9f6aee29f6fdffcabb4a"
        },
        "date": 1679397965593,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 184527534,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2072861,
            "unit": "ns/op",
            "extra": "600 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 38074827,
            "unit": "ns/op",
            "extra": "38 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21975482,
            "unit": "ns/op",
            "extra": "87 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 55093325,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 142970048,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 204412087,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 374451304,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 183270442,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 263439862,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 136033369,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 272367414,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 165173625,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 845070838,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 99232666,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 482072063,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 160403606,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 536019,
            "unit": "ns/op",
            "extra": "2310 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 60233446,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 159108894,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 89275384,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 827043558,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 534018238,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 249526927,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 71813996,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20998217,
            "unit": "ns/op",
            "extra": "90 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 51596938,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 143587434,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 190233972,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 379039643,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 192091428,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 267163905,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 136625460,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 275725010,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 173032477,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 877764135,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 103543564,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 492964723,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 157101506,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18172804,
            "unit": "ns/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 59020818,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 154738598,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 89486321,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 939251776,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 553975661,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 251161963,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 349821743,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21361857,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 52991975,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 145660829,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 189692001,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 377345144,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 194646994,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 275906195,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 136042922,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 279735285,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 169133946,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1159006252,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 100434766,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 481351936,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 161606861,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 168071575,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 57596424,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 156688984,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 88896905,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1623283219,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 566715842,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 257403361,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3302053743,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 23105326,
            "unit": "ns/op",
            "extra": "90 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 55318502,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 143272146,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 189054638,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 399932542,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 186083235,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 269562400,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 137830382,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 280601472,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 171973840,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4077244027,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 101229543,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 490004669,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 154465492,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1672701945,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 59180385,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 153926200,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 88696165,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8345892716,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 543847042,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 251142009,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "4fb767326abf86a7e64f7b70a7594e39cfdf42a7",
          "message": "go: bump k8s.io/code-generator from 0.26.2 to 0.26.3",
          "timestamp": "2023-03-21T11:07:09Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1459/commits/4fb767326abf86a7e64f7b70a7594e39cfdf42a7"
        },
        "date": 1679404412829,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 244588874,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2680756,
            "unit": "ns/op",
            "extra": "478 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 47439289,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 21132039,
            "unit": "ns/op",
            "extra": "74 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 56679061,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 171085938,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 279778834,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 40568,
            "unit": "ns/op",
            "extra": "29058 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 227315172,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 278284889,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 148645300,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 293292586,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 186211346,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 920838266,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 111683287,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 513592062,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 168876912,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 652243,
            "unit": "ns/op",
            "extra": "2066 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 62194367,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 165251257,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 101572853,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 918385302,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 583035996,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 262582249,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 78201405,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21470434,
            "unit": "ns/op",
            "extra": "63 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 56961918,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 171764976,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 262402928,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 526883268,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 254840152,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 295311734,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 150775825,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 304176502,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 187800412,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 975080084,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 109369320,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 512403640,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 175918094,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 17800724,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 62521194,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 167090146,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 108206430,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1018672085,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 588190020,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 258378992,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 374570586,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21566732,
            "unit": "ns/op",
            "extra": "75 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 58727907,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 174791291,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 251199706,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 5069423780,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 252346464,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 275532791,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 149932587,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 298236790,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 190603730,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1319932187,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 110152858,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 516835100,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 172407923,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 173085650,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 62786452,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 176959686,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 105266296,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1853724802,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 628833264,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 264380700,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3312819279,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 23231368,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 56383517,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 174456610,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 228375139,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 47899273574,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 252227243,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 268995276,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 152422431,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 294555955,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 197075156,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4727526612,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 117071230,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 517057696,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 170667097,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1678151813,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 65992007,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 167271930,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 104036176,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 10121111146,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 593591802,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 261815065,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "4a7209345cf6fe857bce9c562325223599a18e91",
          "message": "go: bump k8s.io/apiextensions-apiserver from 0.26.2 to 0.26.3",
          "timestamp": "2023-03-21T11:07:09Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1460/commits/4a7209345cf6fe857bce9c562325223599a18e91"
        },
        "date": 1679404433764,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 175583345,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2039401,
            "unit": "ns/op",
            "extra": "604 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 37069408,
            "unit": "ns/op",
            "extra": "39 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 20813856,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 55846483,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 144689041,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 177640752,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 29290,
            "unit": "ns/op",
            "extra": "41055 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 179682166,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 276743052,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 135378693,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 274200646,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 168165825,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 839138270,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 98639122,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 468959034,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 157963808,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 529464,
            "unit": "ns/op",
            "extra": "2312 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 59508423,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 160529594,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 89775983,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 846348538,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 551721898,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 250351032,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 71540080,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21609413,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 53954157,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 143111744,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 184256880,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 367648948,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 185558720,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 256747539,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 137834840,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 273260119,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 169110525,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 891206056,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 101649320,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 474303114,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 161376868,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18138230,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 60268234,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 155460847,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 88224746,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 940715958,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 545661393,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 246690797,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 369504225,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21525262,
            "unit": "ns/op",
            "extra": "91 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 52986088,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 144428061,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 181633309,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 3623817380,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 184337141,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 271054452,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 135704280,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 274829093,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 172014917,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1174827757,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 102111004,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 474048076,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 153896905,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 166408043,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 60607044,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 153097147,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 88248284,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 1603155492,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 531331085,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 251389128,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3318827955,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21562431,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 54740676,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 146115100,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 181574787,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 35890810192,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 181037404,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 261012997,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 137481704,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 273087381,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 169199800,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4007694898,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 101031701,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 481905410,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 155340422,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1643414667,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 57774823,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 154080764,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 88607626,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 8404951944,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 535100338,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 253910810,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mauriciov@microsoft.com",
            "name": "Mauricio Vásquez",
            "username": "mauriciovasquezbernal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "064929074c97f4df4363739145eab45ed5222487",
          "message": "Merge pull request #1449 from inspektor-gadget/mauricio/use-clang-15\n\nUse clang-15 to compile eBPF files",
          "timestamp": "2023-03-21T08:49:24-05:00",
          "tree_id": "766790442504f478767c1bca4ed3e1e8c8533b04",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/commit/064929074c97f4df4363739145eab45ed5222487"
        },
        "date": 1679406854310,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 156985991,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1978575,
            "unit": "ns/op",
            "extra": "638 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 39879563,
            "unit": "ns/op",
            "extra": "30 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 20385609,
            "unit": "ns/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 59444635,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 134922739,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 160366661,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 32167,
            "unit": "ns/op",
            "extra": "43546 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 162769107,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 271568930,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 162878446,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 370858776,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 158439391,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 919136976,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 94182399,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 485990935,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 161912215,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 380562,
            "unit": "ns/op",
            "extra": "3271 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 65008982,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 157979530,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 90143051,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 913589700,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 586651180,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 266862745,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 71814809,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20239515,
            "unit": "ns/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 57586249,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 137285903,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 165614157,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 452193640,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 167339143,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 260030039,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 166024115,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 373809027,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 168826137,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 965735352,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 95177746,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 489359877,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 170070905,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18726318,
            "unit": "ns/op",
            "extra": "58 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 61474281,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 156472194,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 91980234,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1052179305,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 584735486,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 273807984,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 367763642,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20041456,
            "unit": "ns/op",
            "extra": "86 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 57894597,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 138411202,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 163211763,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4235715694,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 168649809,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 272278303,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 162415765,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 379373351,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 165375560,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1241959508,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 95635244,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 487054118,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 162864377,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 168407281,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 60072446,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 157530448,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 91030005,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2047652008,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 591164705,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 267883096,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3334432427,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 19960687,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 56865205,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 135392478,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 168392880,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 41792767451,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 165735212,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 273903785,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 162500894,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 374633460,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 164564033,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4101964730,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 93488355,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 507311771,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 157885440,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1660439911,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 57739194,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 159116257,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 90853688,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 12454554182,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 604378260,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 261131526,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "cf599b7a1bde01aada423894ecd3750820780803",
          "message": "Dockerfiles: Bump golang from 1.19 to 1.20 in /Dockerfiles",
          "timestamp": "2023-03-21T11:07:09Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1395/commits/cf599b7a1bde01aada423894ecd3750820780803"
        },
        "date": 1679407060649,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 168752874,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1994161,
            "unit": "ns/op",
            "extra": "622 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 44408755,
            "unit": "ns/op",
            "extra": "32 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22909607,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 55233519,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 146581730,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 181099953,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 28927,
            "unit": "ns/op",
            "extra": "40849 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 182376230,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 284081951,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 169747774,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 380544595,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 172323522,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 943864219,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 103828532,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 506454864,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 162399371,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 528669,
            "unit": "ns/op",
            "extra": "2319 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 60949768,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 157907482,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 92804279,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 932296391,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 584866668,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 271005996,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 74269651,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20400340,
            "unit": "ns/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 52649755,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 145449485,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 179882093,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 457143350,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 182080750,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 271713400,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 163091797,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 383992292,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 171339955,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 980461202,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 105811071,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 508746808,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 161905248,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18273217,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 61490787,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 155531679,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 93782539,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1066574931,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 597985560,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 276540337,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 368120933,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20343808,
            "unit": "ns/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 55026450,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 150220188,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 177660550,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4605574252,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 179396865,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 283107162,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 166752804,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 378192400,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 173330765,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1269827686,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 105887781,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 503889598,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 164140928,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 164130285,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 61922886,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 162860138,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 102518278,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2133271945,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 603088652,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 271259411,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3306767228,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 19948927,
            "unit": "ns/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 53543136,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 145924551,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 182659221,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 45973223255,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 180128048,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 272014292,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 168117569,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 385833481,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 176769960,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4303647847,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 102662008,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 500201972,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 167569754,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1681296181,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 62075855,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 163819659,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 95028442,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 13074408319,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 607229404,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 270211732,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "186a896ebef132dc2a755a0319079cdf279025a6",
          "message": "Use cilium/ebpf API to read overwritable perf buffers",
          "timestamp": "2023-03-21T11:07:09Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1461/commits/186a896ebef132dc2a755a0319079cdf279025a6"
        },
        "date": 1679409845587,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 254291558,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 3044539,
            "unit": "ns/op",
            "extra": "442 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 57362550,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 24484411,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 57336483,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 186869861,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 256454867,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 44563,
            "unit": "ns/op",
            "extra": "28042 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 251632255,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 316140754,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 194666794,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 440243677,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 206686792,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 1081301590,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 114449023,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 572675221,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 187939955,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 713995,
            "unit": "ns/op",
            "extra": "1618 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 69553132,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 181776077,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 112738666,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 1070230482,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 763392317,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 311372232,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 91608628,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 24748372,
            "unit": "ns/op",
            "extra": "52 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 58771282,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 189590994,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 256888447,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 600498270,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 244508933,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 310320145,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 191879046,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 448490470,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 204734257,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 1096919224,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 115139574,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 564982378,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 184845364,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18514222,
            "unit": "ns/op",
            "extra": "55 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 70417250,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 181001326,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 116830546,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1260237703,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 716368738,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 300662168,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 377577577,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 25196126,
            "unit": "ns/op",
            "extra": "58 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 58507388,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 197522087,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 228680549,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 6116316563,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 257037812,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 297844906,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 191936743,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 450032577,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 203922336,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1475923634,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 112763483,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 560239874,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 193527541,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 165943378,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 71650551,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 175300677,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 114612995,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2625947501,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 699998550,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 300162162,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3274269555,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 24565052,
            "unit": "ns/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 59786436,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 191561981,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 238572180,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 63156589328,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 266620145,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 332770628,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 196185547,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 447751728,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 201287560,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 5067174885,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 112816090,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 559822528,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 189339623,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1700008256,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 67710896,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 179110084,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 122328413,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 17764980445,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 739098340,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 295127112,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "e488d7b214e4d8d7f0a526af4e7c22f49374450f",
          "message": "Use cilium/ebpf API to read overwritable perf buffers",
          "timestamp": "2023-03-21T11:07:09Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1461/commits/e488d7b214e4d8d7f0a526af4e7c22f49374450f"
        },
        "date": 1679410399572,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 166428653,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1911177,
            "unit": "ns/op",
            "extra": "642 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 39630968,
            "unit": "ns/op",
            "extra": "30 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 20161922,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 57113384,
            "unit": "ns/op",
            "extra": "24 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 134896912,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 158175367,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 32505,
            "unit": "ns/op",
            "extra": "31779 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 160713240,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 257988706,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 161640711,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 372429509,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 163856131,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 929628826,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 94043268,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 497125777,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 161971137,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 396439,
            "unit": "ns/op",
            "extra": "3312 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 60740281,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 155805345,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 90092071,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 938870015,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 597176823,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 264802247,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 72078214,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 21122890,
            "unit": "ns/op",
            "extra": "86 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 56874706,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 140636774,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 164539472,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 414986465,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 167400652,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 274025342,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 169045617,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 370392054,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 161721775,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 964341672,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 96208915,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 506607698,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 161437134,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18666553,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 60718674,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 156675291,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 90628744,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1041068536,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 607998339,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 272171629,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 356664772,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 20036093,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 58689562,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 136141242,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 170648872,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 4282355621,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 163976280,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 264634970,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 172078589,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 387273125,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 162840455,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1271842632,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 95494178,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 502556110,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 163754615,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 170024032,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 61291127,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 160618163,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 92637088,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2097662671,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 591600402,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 279802335,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3382524285,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 20428149,
            "unit": "ns/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 57478662,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 139025006,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 171226149,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 42465455822,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 174659366,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 260989545,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 167776861,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 377301344,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 165256940,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4226288414,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 98136006,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 526497933,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 163325656,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1671036793,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 61131014,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 159480260,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 91659736,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 12629447555,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 589472012,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 270200989,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "albancrequy@microsoft.com",
            "name": "Alban Crequy",
            "username": "alban"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70edd48aa2e013026f298b57f497c0e053ae5c04",
          "message": "Merge pull request #1451 from inspektor-gadget/alban_perf_snapshot_socket\n\nsnapshot socket: improve performances",
          "timestamp": "2023-03-21T16:36:03+01:00",
          "tree_id": "f9021895796993412e059236affeb90373f8a5f9",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/commit/70edd48aa2e013026f298b57f497c0e053ae5c04"
        },
        "date": 1679413233628,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 221939744,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2462674,
            "unit": "ns/op",
            "extra": "502 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 50462728,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22161433,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 58300686,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 181582869,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 207508376,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 619662926,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 219378105,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 283447435,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 193823932,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 431643334,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 199240452,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 1048969315,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 115117543,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 559648596,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 185122656,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 634804,
            "unit": "ns/op",
            "extra": "2026 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 68975435,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 175840940,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 110568190,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 1081850778,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 711918646,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 302785102,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 84488526,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 22649114,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 56569396,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 177173303,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 221364820,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 582134984,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 223805185,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 311749636,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 188631418,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 444620837,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 197382731,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 1129036100,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 110848591,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 557358088,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 175657766,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 17752512,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 67326215,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 173789969,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 112705482,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1179410193,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 677724382,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 304870020,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 372589716,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 23474449,
            "unit": "ns/op",
            "extra": "62 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 59583022,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 178189329,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 220726502,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 630044335,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 217764951,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 302109950,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 191837318,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 434538736,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 204005437,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1443724362,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 111336227,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 550537871,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 178743849,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167042086,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 68318392,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 188293164,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 113192674,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2489929674,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 685169328,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 306526306,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3298768851,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 23253373,
            "unit": "ns/op",
            "extra": "63 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 61057161,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 188806599,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 218033878,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 615373324,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 228489148,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 312753570,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 187917852,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 451530983,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 197346600,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4711568342,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 109526768,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 584789171,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 181794080,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1655268889,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 67556270,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 180598957,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 115109818,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 15576902677,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 677056098,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 296799808,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "4ecdebef340c7e57b8937fac092f1279c0964d96",
          "message": "Use cilium/ebpf API to read overwritable perf buffers",
          "timestamp": "2023-03-21T11:07:09Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1461/commits/4ecdebef340c7e57b8937fac092f1279c0964d96"
        },
        "date": 1679414884231,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 207025231,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2375091,
            "unit": "ns/op",
            "extra": "531 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 52688003,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22757161,
            "unit": "ns/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 66122717,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 191833895,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 232517993,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 531265288,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 213859008,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 311346961,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 193569924,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 436421553,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 194891602,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 1092974133,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 107724818,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 573279238,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 179424882,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 627184,
            "unit": "ns/op",
            "extra": "1866 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 68648840,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 181723955,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 107485479,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 1052980296,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 686214570,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 304212335,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 82404380,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 23008811,
            "unit": "ns/op",
            "extra": "62 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 58707278,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 190847347,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 213059166,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 556240361,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 233657172,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 285191001,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 188590453,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 428435042,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 194669167,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 1109557990,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 110425804,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 549867844,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 188867744,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18405272,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 68501773,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 173921153,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 112294011,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1262031219,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 697001925,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 307745696,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 361631856,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 22810195,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 59310996,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 179624732,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 215336316,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 557949169,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 225053068,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 290345227,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 192894990,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 443429933,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 198668526,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1419098921,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 111311626,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 555823400,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 178438309,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 167421689,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 69331167,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 178206405,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 108104468,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2539724756,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 679456012,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 313823760,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3263085614,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 24199563,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 58977650,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 184488507,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 231100181,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 614355474,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 228666656,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 308684836,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 192873866,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 448064781,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 191987692,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4769414438,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 110727442,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 561918954,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 180103488,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1657518171,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 69066213,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 181545288,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 112173861,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 15734616025,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 690423466,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 300950886,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "c9e91cab1ea7c1056408dd0355cc6f7c28cab962",
          "message": "gadgets: use __always_inline",
          "timestamp": "2023-03-21T16:43:11Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1463/commits/c9e91cab1ea7c1056408dd0355cc6f7c28cab962"
        },
        "date": 1679417812846,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 173281282,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2077025,
            "unit": "ns/op",
            "extra": "604 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 43453808,
            "unit": "ns/op",
            "extra": "26 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 19233301,
            "unit": "ns/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 55751237,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 146275256,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 193367500,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 462812462,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 190204468,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 280423483,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 168002400,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 379761771,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 177178513,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 941791217,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 106366638,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 513933985,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 171362191,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 525314,
            "unit": "ns/op",
            "extra": "2283 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 63497906,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 163533796,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 95128533,
            "unit": "ns/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 950033702,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 607158977,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 279675222,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 76509567,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 20731840,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 53617599,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 150599371,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 189845480,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 479545692,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 199207823,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 278079642,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 165024636,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 377032213,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 180689874,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 980896156,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 104852747,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 510755792,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 163053878,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18625756,
            "unit": "ns/op",
            "extra": "55 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 61329295,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 163071530,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 95541786,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1075473028,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 622805049,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 273815985,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 371659875,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 21166298,
            "unit": "ns/op",
            "extra": "76 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 57058845,
            "unit": "ns/op",
            "extra": "25 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 154040403,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 190616565,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 479811394,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 190550663,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 285576877,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 174477716,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 389561865,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 175305393,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1327890192,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 105733988,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 517356470,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 168830333,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 169032988,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 64485993,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 164618832,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 96268288,
            "unit": "ns/op",
            "extra": "14 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2133175392,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 624467043,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 276196754,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3311343396,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 21301595,
            "unit": "ns/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 55068213,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 150050518,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 194238721,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 517044124,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 190845268,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 282961735,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 168336993,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 383864085,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 180632561,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4385015052,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 105239846,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 513091362,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 163828947,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1671243862,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 60674696,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 164724141,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 97940918,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 12795075232,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 635290787,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 278606674,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "d5c268fed5279324750bdbe189171d9557c96f13",
          "message": "runtime/local: Move context and timeout management from runtime to tracers",
          "timestamp": "2023-03-21T16:43:11Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1408/commits/d5c268fed5279324750bdbe189171d9557c96f13"
        },
        "date": 1679418538605,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 207438849,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2343200,
            "unit": "ns/op",
            "extra": "501 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 48946409,
            "unit": "ns/op",
            "extra": "28 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 22867692,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 62574776,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 174482250,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 210131812,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 550353088,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 219119540,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 180114397,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 187463690,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 442704949,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 194851018,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 1108995622,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 110013799,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 551612235,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 174917635,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 601877,
            "unit": "ns/op",
            "extra": "2094 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 65477140,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 172513791,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 107339756,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 1060139118,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 655876497,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 302612489,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 83773627,
            "unit": "ns/op",
            "extra": "16 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 22878041,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 58124200,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 180715230,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 223880320,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 569523294,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 232678648,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 176085160,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 191519772,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 448470213,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 204744959,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 1103889580,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 108050482,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 542834648,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 176437079,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 17872227,
            "unit": "ns/op",
            "extra": "70 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 68346692,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 175050898,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 108004987,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1190766876,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 686893305,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 300245748,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 373414556,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 24135577,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 57716074,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 176856721,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 210814181,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 542352577,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 222998380,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 177334158,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 186538750,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 428649585,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 195257311,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1391830216,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 111968519,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 549476035,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 183451032,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 164438462,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 68864468,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 174765802,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 107346634,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2411946271,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 708885088,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 302409196,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3287316939,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 22808295,
            "unit": "ns/op",
            "extra": "64 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 58210905,
            "unit": "ns/op",
            "extra": "22 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 185238291,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 235749284,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 598744445,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 219576690,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 172942087,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 189805783,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 439603740,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 187318096,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4671566502,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 112754557,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 538077842,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 180279095,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1667587682,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 68262882,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 175121467,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 108422047,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 15126150867,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 689408096,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 289699525,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "committer": {
            "name": "inspektor-gadget",
            "username": "inspektor-gadget"
          },
          "id": "e5a586a604794bd5dfe3d74cf67a45194b524df5",
          "message": "runtime/local: Move context and timeout management from runtime to tracers",
          "timestamp": "2023-03-21T16:43:11Z",
          "url": "https://github.com/inspektor-gadget/inspektor-gadget/pull/1408/commits/e5a586a604794bd5dfe3d74cf67a45194b524df5"
        },
        "date": 1679421031254,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 219455300,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 2324152,
            "unit": "ns/op",
            "extra": "535 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/-traceloop",
            "value": 53349721,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/advise-seccomp",
            "value": 23450091,
            "unit": "ns/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/audit-seccomp",
            "value": 61348804,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/profile-cpu",
            "value": 211454514,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-process",
            "value": 247431467,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/snapshot-socket",
            "value": 611894224,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-ebpf",
            "value": 253143085,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-file",
            "value": 188135668,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/top-tcp",
            "value": 189793329,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-bind",
            "value": 437413381,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-capabilities",
            "value": 205336764,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-dns",
            "value": 1052570119,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-exec",
            "value": 117353080,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-fsslower",
            "value": 554453724,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-mount",
            "value": 187914012,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-network",
            "value": 725465,
            "unit": "ns/op",
            "extra": "1692 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-oomkill",
            "value": 70447070,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-open",
            "value": 179128014,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-signal",
            "value": 112269009,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-sni",
            "value": 1059573690,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcp",
            "value": 709019743,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container0/trace-tcpconnect",
            "value": 285107570,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/-traceloop",
            "value": 86737606,
            "unit": "ns/op",
            "extra": "15 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/advise-seccomp",
            "value": 23980302,
            "unit": "ns/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/audit-seccomp",
            "value": 60081892,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/profile-cpu",
            "value": 178553720,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-process",
            "value": 258077460,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/snapshot-socket",
            "value": 617853248,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-ebpf",
            "value": 254318491,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-file",
            "value": 183779190,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/top-tcp",
            "value": 189865141,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-bind",
            "value": 436505222,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-capabilities",
            "value": 206702171,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-dns",
            "value": 1121732408,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-exec",
            "value": 119261586,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-fsslower",
            "value": 564360794,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-mount",
            "value": 188746146,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-network",
            "value": 18066549,
            "unit": "ns/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-oomkill",
            "value": 71372505,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-open",
            "value": 189527101,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-signal",
            "value": 119280182,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-sni",
            "value": 1206489693,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcp",
            "value": 704630484,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container1/trace-tcpconnect",
            "value": 286479653,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/-traceloop",
            "value": 371471809,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/advise-seccomp",
            "value": 24213260,
            "unit": "ns/op",
            "extra": "62 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/audit-seccomp",
            "value": 58369269,
            "unit": "ns/op",
            "extra": "21 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/profile-cpu",
            "value": 174055685,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-process",
            "value": 244007725,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/snapshot-socket",
            "value": 615718494,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-ebpf",
            "value": 247827887,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-file",
            "value": 186183811,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/top-tcp",
            "value": 180672876,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-bind",
            "value": 437179526,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-capabilities",
            "value": 213055777,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-dns",
            "value": 1442982229,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-exec",
            "value": 114960033,
            "unit": "ns/op",
            "extra": "10 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-fsslower",
            "value": 560476473,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-mount",
            "value": 185052628,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-network",
            "value": 171271172,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-oomkill",
            "value": 69721471,
            "unit": "ns/op",
            "extra": "19 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-open",
            "value": 185314763,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-signal",
            "value": 114150126,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-sni",
            "value": 2625570617,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcp",
            "value": 685877411,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container10/trace-tcpconnect",
            "value": 299655959,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/-traceloop",
            "value": 3284337471,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/advise-seccomp",
            "value": 25699955,
            "unit": "ns/op",
            "extra": "56 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/audit-seccomp",
            "value": 59633960,
            "unit": "ns/op",
            "extra": "20 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/profile-cpu",
            "value": 177388181,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-process",
            "value": 244434410,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/snapshot-socket",
            "value": 653005900,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-ebpf",
            "value": 253373290,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-file",
            "value": 186116630,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/top-tcp",
            "value": 185156959,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-bind",
            "value": 436426652,
            "unit": "ns/op",
            "extra": "3 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-capabilities",
            "value": 204808068,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-dns",
            "value": 4801928122,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-exec",
            "value": 114131319,
            "unit": "ns/op",
            "extra": "9 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-fsslower",
            "value": 568550020,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-mount",
            "value": 186594491,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-network",
            "value": 1716939123,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-oomkill",
            "value": 70995742,
            "unit": "ns/op",
            "extra": "18 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-open",
            "value": 178317490,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-signal",
            "value": 115888638,
            "unit": "ns/op",
            "extra": "12 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-sni",
            "value": 15999786645,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcp",
            "value": 659605542,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkAllGadgetsWithContainers/container100/trace-tcpconnect",
            "value": 282591046,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          }
        ]
      }
    ]
  }
}