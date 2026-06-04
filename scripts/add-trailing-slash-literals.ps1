$ErrorActionPreference = 'Stop'
$files = Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts -File
$totalChanged = 0
$totalReplacements = 0

$patterns = @(
    "((?:path|url|link|to|href|slug|route|canonical|loc)\s*:\s*')(/[A-Za-z0-9][A-Za-z0-9\-_/]*)(')",
    '((?:path|url|link|to|href|slug|route|canonical|loc)\s*:\s*")(/[A-Za-z0-9][A-Za-z0-9\-_/]*)(")'
)

$callback = {
    param($m)
    $head = $m.Groups[1].Value
    $path = $m.Groups[2].Value
    $tail = $m.Groups[3].Value
    if ($path -eq '/' -or $path.EndsWith('/')) { return $m.Value }
    $segs = $path -split '/'
    $lastSeg = $segs[$segs.Length - 1]
    if ($lastSeg.Contains('.')) { return $m.Value }
    $script:replaceCount++
    return $head + $path + '/' + $tail
}

foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw -Encoding UTF8
    if ($null -eq $content) { continue }
    $orig = $content
    $script:replaceCount = 0
    foreach ($p in $patterns) {
        $content = [regex]::Replace($content, $p, $callback)
    }
    if ($content -ne $orig) {
        Set-Content -Path $f.FullName -Value $content -Encoding UTF8 -NoNewline
        $totalChanged++
        $totalReplacements += $script:replaceCount
        Write-Host "$($f.Name): $script:replaceCount"
    }
}
Write-Host ""
Write-Host "Total files changed: $totalChanged"
Write-Host "Total replacements: $totalReplacements"
