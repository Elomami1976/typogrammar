# PowerShell script to create a deployment zip of the contents of dist/
# Usage: Open PowerShell in project root and run: .\scripts\zip-dist.ps1

$projectRoot = Get-Location
$distPath = Join-Path $projectRoot 'dist'
$destZip = Join-Path $projectRoot 'dist-deploy.zip'

if (-not (Test-Path $distPath)) {
    Write-Error "dist/ folder not found. Run `npm run build` first or check you are in the project root."
    exit 1
}

# Remove existing zip if present
if (Test-Path $destZip) {
    Remove-Item $destZip -Force
}

Write-Host "Creating deployment zip at: $destZip"
# Compress only contents of dist/ (not the dist folder itself)
Push-Location $distPath
try {
    Compress-Archive -Path * -DestinationPath $destZip -Force
    Write-Host "Zip created successfully. Path: $destZip"
} catch {
    Write-Error "Failed to create zip: $_"
    exit 1
} finally {
    Pop-Location
}

Write-Host "Next steps: Upload 'dist-deploy.zip' to Hostinger (public_html) and extract its contents so index.html is directly inside public_html."