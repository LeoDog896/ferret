oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ferret
$ ferret COMMAND
running command...
$ ferret (--version)
ferret/0.0.0 linux-x64 node-v16.14.0
$ ferret --help [COMMAND]
USAGE
  $ ferret COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ferret hello PERSON`](#ferret-hello-person)
* [`ferret hello world`](#ferret-hello-world)
* [`ferret help [COMMAND]`](#ferret-help-command)
* [`ferret plugins`](#ferret-plugins)
* [`ferret plugins:install PLUGIN...`](#ferret-pluginsinstall-plugin)
* [`ferret plugins:inspect PLUGIN...`](#ferret-pluginsinspect-plugin)
* [`ferret plugins:install PLUGIN...`](#ferret-pluginsinstall-plugin-1)
* [`ferret plugins:link PLUGIN`](#ferret-pluginslink-plugin)
* [`ferret plugins:uninstall PLUGIN...`](#ferret-pluginsuninstall-plugin)
* [`ferret plugins:uninstall PLUGIN...`](#ferret-pluginsuninstall-plugin-1)
* [`ferret plugins:uninstall PLUGIN...`](#ferret-pluginsuninstall-plugin-2)
* [`ferret plugins update`](#ferret-plugins-update)

## `ferret hello PERSON`

Say hello

```
USAGE
  $ ferret hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/LeoDog896/ferret/blob/v0.0.0/dist/commands/hello/index.ts)_

## `ferret hello world`

Say hello world

```
USAGE
  $ ferret hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ ferret hello world
  hello world! (./src/commands/hello/world.ts)
```

## `ferret help [COMMAND]`

Display help for ferret.

```
USAGE
  $ ferret help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ferret.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

## `ferret plugins`

List installed plugins.

```
USAGE
  $ ferret plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ferret plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.2/src/commands/plugins/index.ts)_

## `ferret plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ferret plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ferret plugins add

EXAMPLES
  $ ferret plugins:install myplugin 

  $ ferret plugins:install https://github.com/someuser/someplugin

  $ ferret plugins:install someuser/someplugin
```

## `ferret plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ferret plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ferret plugins:inspect myplugin
```

## `ferret plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ferret plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ferret plugins add

EXAMPLES
  $ ferret plugins:install myplugin 

  $ ferret plugins:install https://github.com/someuser/someplugin

  $ ferret plugins:install someuser/someplugin
```

## `ferret plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ferret plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ferret plugins:link myplugin
```

## `ferret plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ferret plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ferret plugins unlink
  $ ferret plugins remove
```

## `ferret plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ferret plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ferret plugins unlink
  $ ferret plugins remove
```

## `ferret plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ferret plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ferret plugins unlink
  $ ferret plugins remove
```

## `ferret plugins update`

Update installed plugins.

```
USAGE
  $ ferret plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
